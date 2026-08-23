import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"
import clsx from "clsx"

interface Navbar {
    onShowSidenav: () => void
}

export default function Navbar({onShowSidenav}: Navbar) {

    let pathname =  usePathname();

    return(
        <nav className={styles.navbar} aria-label="header">

            <button aria-label="display navigation menu" className={styles.button_open_nav_menu} 
            aria-controls="sidenav" aria-expanded="false" onClick={onShowSidenav}>
                <img src="/icons/menu-white.svg" alt="" aria-hidden="true" />
            </button>

            <Link href="/" aria-label="home link" className={styles.logo}>INKORA</Link>
            <ul className={styles.navbar_list}>
                <li className={styles.navbar_list_element}>
                    <Link className={clsx(styles.navbar_list_link,{
                        "current_link-2": pathname === "/"
                    })} href="/">Home</Link>
                </li>
                <li className={styles.navbar_list_element}>
                    <Link className={clsx(styles.navbar_list_link,{
                        "current_link-2": pathname === "/app"
                    })} href="/app">App</Link>
                </li>
                <li className={styles.navbar_list_element}>
                    <Link className={clsx(styles.navbar_list_link,{
                        "current_link-2": pathname === "/about"
                    })} href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}