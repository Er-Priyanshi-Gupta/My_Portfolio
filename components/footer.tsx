import { Heart, Code, Sparkles, Coffee } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold">
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Priyanshi Gupta
              </span>
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful digital experiences with passion, creativity, and a touch of magic ✨
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center gap-8 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-purple-200 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Made With Love */}
          <div className="flex items-center justify-center gap-2 text-purple-200">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-blue-400" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-yellow-400" />
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-purple-700">
            <p className="text-purple-300 text-sm">
              © {currentYear} Priyanshi Gupta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
