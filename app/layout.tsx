import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Афиша24 - Билеты на стендап шоу и концерты",
  description:
    "Покупайте билеты на лучшие стендап шоу, концерты и развлекательные мероприятия в вашем городе. Удобное бронирование мест онлайн.",
  keywords: "билеты, стендап, концерты, шоу, развлечения, афиша, бронирование",
  authors: [{ name: "Афиша24" }],
  creator: "Афиша24",
  publisher: "ООО Афиша24",
  robots: "index, follow",
  openGraph: {
    title: "Афиша24 - Билеты на стендап шоу и концерты",
    description: "Покупайте билеты на лучшие стендап шоу, концерты и развлекательные мероприятия в вашем городе.",
    type: "website",
    locale: "ru_RU",
    siteName: "Афиша24",
  },
  twitter: {
    card: "summary_large_image",
    title: "Афиша24 - Билеты на стендап шоу и концерты",
    description: "Покупайте билеты на лучшие стендап шоу, концерты и развлекательные мероприятия в вашем городе.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
