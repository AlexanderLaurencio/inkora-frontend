import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className={styles.footer}>

            <div className={styles.footer_left_side}>
                <nav className={styles.brand_nav} aria-label="footer brand">
                    <Link href="/" className={styles.logo}>BLOG</Link>
                    <ul className={styles.brand_nav_list}>
                        <li className={styles.brand_nav_element}>
                            <Link href="/terms" className={styles.brand_nav_link}>Terms</Link>
                        </li>
                        <li className={styles.brand_nav_element} aria-hidden="true">
                            <span>|</span>
                        </li>
                        <li className={styles.brand_nav_element}>
                            <Link href="/privacypolicy" className={styles.brand_nav_link}>Privacy policy</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <small className={styles.copyright}>
                © Alexander Neftali Miranda All rights reserved 2026
            </small>

            <div className={styles.footer_right_side}>
                <nav className={styles.quicklinks_nav} aria-label="footer quicklinks">
                    <h2 className={styles.quicklinks_list_title} id="quicklinks_list_title" >Quicklinks</h2>
                    <ul className={styles.quicklinks_list} aria-labelledby="quicklinks_list_title">
                        <li className={styles.quicklinks_list_element}>
                            <Link href="/" className={styles.quicklinks_list_link}>Home</Link>
                        </li>
                        <li className={styles.quicklinks_list_element}>
                            <Link href="/app" className={styles.quicklinks_list_link}>App</Link>
                        </li>
                        <li className={styles.quicklinks_list_element}>
                            <Link href="/about" className={styles.quicklinks_list_link}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </footer>
    )
}