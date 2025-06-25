"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Heart } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentWord, setCurrentWord] = useState(0)

  const words = ["Frontend Developer", "UI/UX Enthusiast", "Creative Coder", "Problem Solver"]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15,
          }}
        />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-pink-300/25 to-rose-300/25 rounded-full blur-2xl animate-pulse" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed">
          <div className="w-3 h-3 bg-pink-400 rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float">
          <div className="w-5 h-5 bg-indigo-400 rounded-full opacity-40"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-12 relative">
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=180&width=180"
                  alt="Priyanshi Gupta"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 animate-bounce">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 animate-pulse">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient leading-tight">
              Hi there! 👋
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
              I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Priyanshi Gupta
              </span>
            </h2>
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                A passionate{" "}
                <span className="inline-block min-w-[300px] text-left">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                    {words[currentWord]}
                  </span>
                </span>
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful and intuitive user experiences with modern web technologies. Currently pursuing my
            journey as a software engineer, constantly expanding my skills and exploring new frontiers in frontend
            development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
            >
              <Link href="#projects">
                <Sparkles className="mr-2 h-5 w-5" />
                Explore My Work
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
            >
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            {[
              { href: "https://github.com/Er-Priyanshi-Gupta", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/priyanshi-gupta", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:priyanshi@example.com", icon: Mail, label: "Email" },
            ].map((social, index) => (
              <Button
                key={index}
                asChild
                variant="ghost"
                size="icon"
                className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 dark:bg-gray-800/10 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Link href={social.href} target="_blank" aria-label={social.label}>
                  <social.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
