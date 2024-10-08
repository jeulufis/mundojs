import Link from "next/link"
import "./globals.css"
import { Rubik } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import Footer from "@/components/footer"

const inter = Rubik({ subsets: ["latin"], weight:["400","500","600", "700", "800", "900"] })

export const metadata = {
  title: "MundoJS - Aprende JavaScript de forma sencilla.",
  description: "Aprende JavaScript, React, Next.js, TypeScript, y más.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#020617" />
      </head>
      <body
        className={`antialiased min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
