"use client"
import Link from "next/link"
import styles from "./loginForm.module.css"
import React, { useState } from "react"
import { isEmpty } from "./../../../utils/isEmpty/isEmpty";
import { CONTENT_TYPE, SERVER_URL } from "./../../../constants/constants";
import { useRouter } from "next/navigation";

export function LoginForm() {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [isError, seIsError] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const router = useRouter();

    function showError(message: string) {
        setErrorMsg(message);
        seIsError(true)
    };

    async function handleForm(e: React.MouseEvent) {
        e.preventDefault();
        
        if (!validData()) {
            return
        }

        try {

            let request = await fetch(SERVER_URL + "/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": CONTENT_TYPE.json,
                },
                body: JSON.stringify({username: username, password: password})
            });

            let response = await request.text();

            if (!request.ok) {
                showError(response);
                return
            }

            //If request succeds
            console.log("Logged in sucessfully");
            router.push("/app")

        } catch(error) {
            console.error(error);
            showError("Sorry, something went wrong :(")
        }

    }

    function validData() {

        if (isEmpty(username)) {
            showError("The username field cannot be empty.");
            return false
        }

        if (username.includes(" ")) {
            showError("The username cannot contain spaces.");
            return false
        }

        if (isEmpty(password)) {
            showError("The password field cannot be empty.");
            return false
        }

        if (password.includes(" ")) {
            showError("The password cannot contain spaces.");
            return false
        }

        if (password.length <= 7) {
            showError("The password must contain at least 8 characters.");
            return false
        }

        //If the data the user inserts meet the requirments the error isn't shown
        seIsError(false);
        return true
    }

    return(
        <>
            <form className={styles.login_form}>
                <h2>Log in</h2>
                <input type="text" name="username" maxLength={30} className={styles.login_form_input_username} 
                    placeholder="Username" aria-label="username" onChange={(e) => setUsername(e.target.value)}/>

                <input type="password" name="password" className={styles.login_form_input_password} 
                    placeholder="Password" aria-label="password" maxLength={64} minLength={8} 
                    onChange={(e) => setPassword(e.target.value)}/>

                    <p>Don't have an account? <Link href="/signup">register here!</Link></p>

                <button className={styles.login_form_button_login} onClick={handleForm}>Log in</button>
                {isError && <p role="alert" className={styles.errorMessage}>{errorMsg}</p>}
            </form>
        </>
    )
}