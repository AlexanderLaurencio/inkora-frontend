import styles from "./footer.module.css"
import Link from "next/link"

export default function FooterSkeleton() {
    return(
        <footer className={styles.footerSkeleton}>

            <div className={styles.footer_left_sideSkeleton}>

                <nav className={styles.brand_navSkeleton} aria-label="footer brand">
                    <Link href="/" className={styles.logoSkeleton}>BLOG</Link>
                    <ul className={styles.brand_nav_listSkeleton}>
                        <li className={styles.brand_nav_elementSkeleton}>
                            <Link href="/terms" className={styles.brand_nav_linkSkeleton}>Terms</Link>
                        </li>
                        <li className={styles.brand_nav_elementSkeleton} aria-hidden="true">
                            <span>|</span>
                        </li>
                        <li className={styles.brand_nav_elementSkeleton}>
                            <Link href="/privacypolicy" className={styles.brand_nav_linkSkeleton}>Privacy policy</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <small className={styles.copyrightSkeleton}>
                © Alexander Neftali Miranda All rights reserved 2026
            </small>

            <div className={styles.footer_right_sideSkeleton}>
                <nav className={styles.quicklinks_navSkeleton} aria-label="footer quicklinks">
                    <h2 className={styles.quicklinks_list_titleSkeleton} id="quicklinks_list_title" >Quicklinks</h2>
                    <ul className={styles.quicklinks_lisSkeleton} aria-labelledby="quicklinks_list_title">
                        <li className={styles.quicklinks_list_elementSkeleton}>
                            <Link href="/" className={styles.quicklinks_list_linkSkeleton}>Home</Link>
                        </li>
                        <li className={styles.quicklinks_list_elementSkeleton}>
                            <Link href="/app" className={styles.quicklinks_list_linkSkeleton}>App</Link>
                        </li>
                        <li className={styles.quicklinks_list_elementSkeleton}>
                            <Link href="/about" className={styles.quicklinks_list_linkSkeleton}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
} 