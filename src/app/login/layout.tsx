import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inkora | Login",
  description: "Inkora is blogging platform where users can blogs publish posts",
};

export default function LoginLayout({ children }: LayoutProps<"/login">) {
  return (
    <>
      {children}
    </>
  );
}
