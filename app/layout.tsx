import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Priyanshi Gupta - Frontend Developer & UI/UX Enthusiast",
  description:
    "Portfolio of Priyanshi Gupta, a passionate frontend developer specializing in React, Next.js, and modern web technologies. Creating beautiful and intuitive user experiences.",
  keywords: [
    "Priyanshi Gupta",
    "Frontend Developer",
    "React Developer",
    "UI/UX Designer",
    "JavaScript",
    "Next.js",
    "Web Developer",
    "Portfolio",
    "EchoTech",
  ],
  authors: [{ name: "Priyanshi Gupta", url: "https://github.com/Er-Priyanshi-Gupta" }],
  creator: "Priyanshi Gupta",
  openGraph: {
    title: "Priyanshi Gupta - Frontend Developer & UI/UX Enthusiast",
    description:
      "Passionate frontend developer creating beautiful and intuitive user experiences with modern web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Priyanshi Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshi Gupta - Frontend Developer",
    description: "Creating beautiful digital experiences with React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
