import type { Metadata } from "next";
import { bebasNeue, chokokutai } from "./fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "John Patrick | %s",
    default: "John Patrick | Personal Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black-100 ${bebasNeue.className} ${chokokutai.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
