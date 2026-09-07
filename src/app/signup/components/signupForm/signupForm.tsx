"use client"
import { useState } from "react"
import styles from "./signupForm.module.css"
import { useRouter } from "next/navigation"
import { CONTENT_TYPE, SERVER_URL } from "../../../constants/constants"
import { isEmpty } from "../../../utils/isEmpty/isEmpty";

export default function SignupForm() {
    const router = useRouter();
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [profileDescription, setProfileDescription] = useState("");
    const [profileImage, setProfileImage] = useState<string | null>();
    const [userExists, setUserExists] = useState(false);

    function showError(msg: string) {
        setIsError(true);
        setErrorMsg(msg)
    }

    function isValidImage(img: File) {

        //If the image is too heavy
        if (img.size > 2000000) {
            showError("The image is too heavy. Please insert an image that weighs less than two megabytes.")
            return false
        }

        return true

    }


    async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {

        if (!isValidImage(e.target.files![0])) {
            return
        }

        setIsError(false);

        let img = await e.target.files![0].arrayBuffer();
        let bytes = new Uint8Array(img);

        let binary = "";

        for (const byte of bytes) {
            binary += String.fromCharCode(byte)
        }

        let base64 = btoa(binary);

        setProfileImage(base64);


    }

    async function doesUserExist(user: string) {
        try {

            if (user.trim()) {
                let request = await fetch(SERVER_URL + "/signup" + `?user=${user}`);

                interface Response {
                    exists: boolean
                }

                let response = await request.json() as Response;

                if (!request.ok) {
                    showError("Error verifying whether the user exist.");
                    throw new Error("Error verifying whether the user exist.")
                }

                setUserExists(response.exists);
            }

        } catch(error) {
            console.error(error);
        }

    }

    async function handleSendForm(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (!validData()) {
            return
        }

        let user = {
            username: username,
            displayName: displayName,
            password: password,
            profileDescription: profileDescription,
            profileImage: profileImage ? profileImage : null
        }

        try {
            let request = await fetch(SERVER_URL + "/signup", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": CONTENT_TYPE.json,
                },
                body: JSON.stringify(user)
            });

            let response = await request.text();

            if (!request.ok) {
                showError(response);
                return
            }

            router.push("/");

        } catch(error) {
            console.error(error);
            showError("Sorry, something went wrong :(")
        }

    }

    function validData() {
        if (isEmpty(username)) {
            showError("The field username is empty. Fill it out.");
            return false
        }

        if (username.includes(" ")) {
            showError("The username cannot include spaces.");
            return false
        }

        if (isEmpty(displayName)) {
            showError("The field display name is empty. Fill it out.");
            return false
        }

        if (isEmpty(password)) {
            showError("The field password is empty. Fill it out.");
            return false
        }

        if (password.length <= 7) {
            showError("The password must contain at least 8 characters.");
            return false
        }

        //If the data the user inserts meet the requirments the error isn't shown
        setIsError(false);
        return true
    }

    return (
        <form className={styles.form} role="form">
            <h2>Sign up</h2>

            <label htmlFor="inputProfileImage">
                upload profile image
                <input type="file" name="image" className={styles.inputProfileImage}
                    onChange={handleFile} accept="image/*" id="inputProfileImage"/>
            </label>

            <input type="text" name="username" maxLength={30} aria-label="username" required
                placeholder="Username" onChange={(e) => {
                    setUsername(e.target.value);
                    doesUserExist(e.target.value);

                }} />

            {userExists && <p role="alert" className={styles.user_exists}>That user already exists.</p>}

            <input type="text" name="displayName" maxLength={30} aria-label="display name" required
                placeholder="Display name" onChange={(e) => setDisplayName(e.target.value)} />

            <input type="password" name="password" aria-label="password" required placeholder="Password"
                minLength={8} maxLength={64} onChange={(e) => setPassword(e.target.value)} />

            <textarea name="description" maxLength={120} aria-label="profile description"
                placeholder="Profile description" onChange={(e) => setProfileDescription(e.target.value)} />

            <button className={styles.form_button_signup} onClick={handleSendForm}>Sign up</button>

            {isError && <p className={styles.errorMessage} role="alert">{errorMsg}</p>}
        </form>
    )
}
