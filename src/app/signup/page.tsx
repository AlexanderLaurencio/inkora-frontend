import { Suspense } from "react";
import SignupForm from "./components/signupForm/signupForm";
import SignupFormSkeleton from "./components/signupForm/signupFormSkeleton";

export default function Signup() {
    return(
        <main data-testid="signup">
            <Suspense fallback={<SignupFormSkeleton />}>
                <SignupForm />
            </Suspense>
        </main>
    )
}