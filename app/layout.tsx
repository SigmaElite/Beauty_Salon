import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Няша — Современный салон красоты в Минске",
  description:
    "Стильные стрижки, окрашивание, маникюр, педикюр, макияж и косметология. г. Минск, ул. Авроровская 4-1Н. Тел: +375 44 719-90-90",
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
