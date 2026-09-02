import Link from "next/link"
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <section className={styles.hero} data-testid="hero">
            <h1>A place to share and acquire knowledge</h1>
            <p>Create your own blogs and publish all the posts you want.</p>
            <div className={styles.hero_links_wrapper}>
                <Link href="/login" className={styles.login_link}>Log in</Link>
                <Link href="/signup" className={styles.signup_link}>Sign up</Link>
            </div>
        </section>
    )
}
