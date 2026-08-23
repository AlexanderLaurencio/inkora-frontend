import Link from "next/link"
import styles from "./sidenav.module.css"
import { usePathname } from "next/navigation";
import clsx from "clsx"

interface Sidenav {
    onShowSidenav: () => void
}

export default function Sidenav({onShowSidenav}: Sidenav) {

    let pathname = usePathname();
    console.log(pathname)

    return(
        <nav aria-label="header" className={styles.sidenav} id="sidenav">

            <button aria-label="close sidenav" className={styles.button_close_sidenav} 
            aria-controls="sidenav" aria-expanded="true" onClick={onShowSidenav}>
                <img src="/icons/close-black.svg" alt="" aria-hidden="true" />
            </button>

            <ul className={styles.sidenav_list}>

                <li className={styles.sidenav_list_element}>
                    <Link className={clsx(styles.sidenav_list_link,{
                        "current_link-1": pathname === "/"
                    })} href="/">Home</Link>
                </li>

                <li className={styles.sidenav_list_element}>
                    <Link className={clsx(styles.sidenav_list_link,{
                        "current_link-1": pathname === "/app"
                    })} href="/app">App</Link>
                </li>

                <li className={styles.sidenav_list_element}>
                    <Link className={clsx(styles.sidenav_list_link,{
                        "current_link-1": pathname === "/about"
                    })} href="/about">About</Link>
                </li>
                
            </ul>

        </nav>
    )
} 