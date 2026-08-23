import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inkora",
  description: "Inkora is blogging platform where users can blogs publish posts",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
