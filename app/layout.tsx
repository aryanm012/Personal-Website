import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/data/profile";
import "./globals.css";

const title = `${profile.name} | Software Engineer`;
const description =
  "Aryan Mistry’s portfolio of backend engineering, distributed systems, and applied AI projects. Computer Science and Mathematics at the University of Maryland.";

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  openGraph: { title, description, type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans">
        <div className="ambient-background" aria-hidden="true" />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="top" />
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
