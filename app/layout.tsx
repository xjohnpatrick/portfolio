import type { Metadata } from "next";
import { bebasNeue, chokokutai, roboto } from "./fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        className={`bg-black-100 ${roboto.className} ${chokokutai.variable} ${bebasNeue.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
