import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
});

const poppins = Poppins({
    variable: "--font-alt",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "MoTrends",
    description: "AI generation to provide and predict trends for businesses ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${poppins.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
