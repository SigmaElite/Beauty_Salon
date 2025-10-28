import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Весна Бьюти — Современная парикмахерская в Минске",
  description:
    "Стильные стрижки, профессиональное окрашивание и укладка волос. г. Минск, ул. Ротмистрова 60. Тел: +375 29 777-40-89",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${poppins.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
