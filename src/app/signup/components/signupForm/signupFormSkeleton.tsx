import styles from "./signupForm.module.css"

export default function SignupFormSkeleton() {
    return(
        <form className={styles.formSkeleton}>
            <h2>Sign up</h2>
            <label>
                <input type="file" name="image" className={styles.inputProfileImageSkeleton}/>
            </label>
            <input type="text" name="displayName" aria-label="display name" required 
               />
            <input type="text" name="username" aria-label="username name" required 
                />
            <input type="password" name="password" aria-label="password" required
            minLength={8}/>
            <textarea name="description" aria-label="profile description" 
            />
            <button className={styles.form_button_signupSkeleton}>Sign up</button>
        </form>
    )
}