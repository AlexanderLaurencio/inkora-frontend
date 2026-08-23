import Link from "next/link"
import styles from "./navbar.module.css"

export default function NavbarSkeleton() {
    return(
        <nav className={styles.navbarSkeleton} aria-hidden="true">

            <button className={styles.button_open_nav_menuSkeleton}></button>

            <Link href="/" className={styles.logoSkeleton}>INKORA</Link>

            <ul className={styles.navbar_listSkeleton}>
                <li className={styles.navbar_list_elementSkeleton}>
                    <Link href="/" className={styles.navbar_list_linkSkeleton}>Home</Link>
                </li>
                <li className={styles.navbar_list_elementSkeleton}>
                    <Link href="/app" className={styles.navbar_list_linkSkeleton}>App</Link>
                </li>
                <li className={styles.navbar_list_elementSkeleton}>
                    <Link href="/about" className={styles.navbar_list_linkSkeleton}>About</Link>
                </li>
            </ul>
            
        </nav>
    )
}