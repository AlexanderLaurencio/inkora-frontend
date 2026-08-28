"use client"
import { useState } from "react"
import styles from "./signupForm.module.css"
import { useRouter } from "next/compat/router"
import { SERVER_URL } from "@/constants";

export default function SignupForm() {
    const router = useRouter();
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [profileDescription, setProfileDescription] = useState("");
    const [ProfileImage, setProfileImage] = useState<string | ArrayBuffer | null>();
    const [userExists, setUserExists] = useState(false);

    function showError(msg: string) {
        setIsError(true);
        setErrorMsg(msg)
    }

    function isValidImage(file: File) {

        //If the image is too heavy
        if (file.size > 2000000) {
            showError("The image is too heavy. Please insert an image that weighs less than two megabytes.")
            return false
        }

        return true

    }


    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        let img: File = e.target.files![0];

        const reader = new FileReader();

        reader.addEventListener("loadstart", () => {
            setIsError(false)

            if (!isValidImage(img)) {
                reader.abort()
            }

        });

        reader.addEventListener("load", () => {
            setProfileImage(reader.result);
        });

        reader.addEventListener("error", (e) => {
            console.error("Error while reading the file", reader.error);
            showError("An error occurred while reading the image.");
        });

        reader.readAsArrayBuffer(img);
    }

    function isEmpty(value: string) {
        if (!value) {
            return true
        }

        return false
    };

    async function doesUserExist(user: string) {
        let request = await fetch(SERVER_URL + `?user=${user}`);

        interface Response {
            userExists: boolean
        }

        let response = await request.json() as Response;

        if (!request.ok) {
            console.error("Error verifying whether the user exist.");
            showError("Error verifying whether the user exist.");
            return
        }

        setUserExists(response.userExists)

    }

    async function handleSendForm(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (isEmpty(displayName)) {
            showError("The field display name is empty. Fill it out.");
            return
        }

        if (isEmpty(username)) {
            showError("The field username is empty. Fill it out.");
            return
        }

        if (isEmpty(password)) {
            showError("The field password is empty. Fill it out.");
            return
        }

        if (password.length <= 7) {
            showError("The password must contain at least 8 characters.");
            return
        }

        let user = {
            username: username,
            displayName: displayName,
            password: password,
            profileDescription: profileDescription,
            profileImage: ProfileImage ? ProfileImage : null
        }

        let request = await fetch(SERVER_URL + location.pathname, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        });

        let response = await request.text();

        if (!request.ok) {
            console.error("Error while creating user", response);
            showError("Server Internal Error");
            return
        }
        
        router?.push("/")

    }

        return (
            <form className={styles.form}>
                <h2>Sign up</h2>

                <label>
                    upload profile image
                    <input type="file" name="image" className={styles.inputProfileImage}
                        onChange={handleFile} accept="image/*" />
                </label>

                <input type="text" name="username" maxLength={30} aria-label="username" required
                    placeholder="Username" onChange={(e) => {
                        setUsername(e.target.value);
                        //doesUserExist(e.target.value);

                    }} />

                {userExists && <p role="alert">That user already exists.</p>}

                <input type="text" name="displayName" maxLength={30} aria-label="display name" required
                    placeholder="Display name" onChange={(e) => setDisplayName(e.target.value)} />

                <input type="password" name="password" aria-label="password" required placeholder="Password"
                    minLength={8} maxLength={64} onChange={(e) => setPassword(e.target.value)} />

                <textarea name="description" maxLength={120} aria-label="profile description"
                    placeholder="Profile description" onChange={(e) => setProfileDescription(e.target.value)} />

                <button className={styles.form_button_signup} onClick={handleSendForm}>Sign up</button>

                {isError && <p className={styles.fileError} role="alert">{errorMsg}</p>}
            </form>
        )
    }