import { Suspense } from "react";
import SignupForm from "./components/signupForm/signupForm";
import SignupFormSkeleton from "./components/signupForm/signupFormSkeleton";
import styles from "./page.module.css"

export default function Signup() {
    return(
        <main className={styles.main}>
            <Suspense fallback={<SignupFormSkeleton />}>
                <SignupForm />
            </Suspense>
        </main>
    )
}