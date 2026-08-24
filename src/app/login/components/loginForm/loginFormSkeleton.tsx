import styles from "./loginForm.module.css"
import Link from "next/link"

export default function LoginFormSkeleton() {
    return(
        <>
            <form className={styles.login_formSkeleton}>
                <h2>Log in</h2>
                <input type="text" className={styles.login_form_input_usernameSkeleton} />
                <input type="password" className={styles.login_form_input_passwordSkeleton} />
                <p>Don't have an account? <Link href="/signup">register here!</Link></p>
                <button className={styles.login_form_button_loginSkeleton}>Log in</button>
            </form>
        </>
    )
}