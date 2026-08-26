import Link from "next/link"
import styles from "./loginForm.module.css"

export function LoginForm() {
    return(
        <>
            <form action="" className={styles.login_form}>
                <h2>Log in</h2>
                <input type="text" name="username" maxLength={30} className={styles.login_form_input_username} 
                    placeholder="Username" aria-label="username"/>
                <input type="password" name="password" className={styles.login_form_input_password} 
                    placeholder="Password" aria-label="password" maxLength={64}/>
                    <p>Don't have an account? <Link href="/signup">register here!</Link></p>
                <button className={styles.login_form_button_login}>Log in</button>
            </form>
        </>
    )
}