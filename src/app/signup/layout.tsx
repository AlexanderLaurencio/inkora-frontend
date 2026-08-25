import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inkora | Sign up",
  description: "Inkora is blogging platform where users can blogs publish posts",
};

export default function SignupLayout({ children }: LayoutProps<"/signup">) {
  return (
    <>
      {children}
    </>
  );
}
