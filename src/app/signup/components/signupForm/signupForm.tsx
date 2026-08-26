import styles from "./signupForm.module.css"

export default function SignupForm() {
    return(
        <form className={styles.form}>
            <h2>Sign up</h2>
            <label>
                profile image
                <input type="file" name="image" className={styles.inputProfileImage}/>
            </label>
            <input type="text" name="displayName" maxLength={30} aria-label="display name" required 
                placeholder="Display name"/>
            <input type="text" name="username" maxLength={30} aria-label="username name" required 
                placeholder="Username"/>
            <input type="password" name="password" aria-label="password" required placeholder="Password"
            minLength={8} maxLength={64}/>
            <textarea name="description" maxLength={120} aria-label="profile description" 
            placeholder="Profile description"/>
            <button className={styles.form_button_signup}>Sign up</button>
        </form>
    )
}