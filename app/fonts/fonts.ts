import { Bebas_Neue, Chokokutai, Poppins } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '600', '700']
});

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