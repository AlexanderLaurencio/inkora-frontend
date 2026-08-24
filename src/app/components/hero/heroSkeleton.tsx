import styles from "./hero.module.css"

export default function HeroSkeleton() {
    return(
        <section className={styles.heroSkeleton}>
            <h1>A place to share and acquire knowledge</h1>
            <p>Create your own blogs and publish all the posts you want.</p>
            <div className={styles.hero_links_wrapperSkeleton}>
                <a href="/login">Log in</a>
                <a href="/signup">Sign up</a>
            </div>
        </section>
    )
}