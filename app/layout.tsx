import type { Metadata } from "next";
import { poppins } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Patrick's Portfolio",
  description: "Built with Next.js and Aceternity UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
