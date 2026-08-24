import { Suspense } from "react"
import { LoginForm } from "./components/loginForm/loginForm"
import LoginFormSkeleton from "./components/loginForm/loginFormSkeleton"

export default function Login() {
    return(
        <main>
            <Suspense fallback={<LoginFormSkeleton />}>
                <LoginForm />
            </Suspense>
        </main>
    )
}