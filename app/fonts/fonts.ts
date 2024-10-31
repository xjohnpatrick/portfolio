import { Archivo_Black, Bebas_Neue, Chokokutai, Roboto } from 'next/font/google'

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const chokokutai = Chokokutai({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chokokutai",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});