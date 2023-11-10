import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
});

export const metadata: Metadata = {
    title: "DevVibe",
    description: "We are here to solve your problems with modern technologies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} text-white`}>{children}</body>
        </html>
    );
}
