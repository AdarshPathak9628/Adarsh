import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Adarsh Pathak - Python Web Developer Portfolio",
  description:
    "Aspiring Python Web Developer with expertise in Django, HTML, CSS, JavaScript, and MySQL. Showcasing projects and skills in modern web development.",
  keywords: "Python Developer, Django, Web Development, MySQL, JavaScript, HTML, CSS, Portfolio",
  authors: [{ name: "Adarsh Pathak" }],
  creator: "Adarsh Pathak",
  openGraph: {
    title: "Adarsh Pathak - Python Web Developer Portfolio",
    description: "Aspiring Python Web Developer with expertise in Django and modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Pathak - Python Web Developer Portfolio",
    description: "Aspiring Python Web Developer with expertise in Django and modern web technologies",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
