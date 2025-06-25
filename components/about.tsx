"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Rocket, Users, MapPin, Building, Calendar, Award } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Specialist",
      description: "Expert in React, Next.js, and modern JavaScript frameworks",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design-Driven",
      description: "Proficient in Figma and Adobe XD for seamless design implementation",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Innovation Focused",
      description: "Always exploring cutting-edge technologies and best practices",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-Centric",
      description: "Passionate about creating delightful and accessible user experiences",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming ideas into beautiful, functional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm Priyanshi, a passionate frontend developer with a love for creating beautiful, functional,
                and user-friendly digital experiences. My journey in web development started with curiosity and has
                evolved into a deep passion for crafting seamless user interfaces.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in modern web technologies like React, Next.js, and JavaScript, with a strong foundation in
                HTML and CSS. My background in design tools like Figma and Adobe XD allows me to bridge the gap between
                design and development, ensuring pixel-perfect implementations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my path as a software engineer, I'm constantly learning and adapting to new
                technologies. I believe in writing clean, maintainable code and creating experiences that users love and
                remember.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Frontend Developer",
                "UI/UX Enthusiast",
                "React Specialist",
                "Design Systems",
                "Responsive Design",
              ].map((skill, index) => (
                <Badge
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200 border-0 text-sm font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Info Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <Card className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold text-white">PG</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Priyanshi Gupta</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">Frontend Developer</p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "India" },
                    { icon: <Building className="h-5 w-5" />, label: "Company", value: "EchoTech" },
                    { icon: <Calendar className="h-5 w-5" />, label: "Experience", value: "2+ Years" },
                    { icon: <Award className="h-5 w-5" />, label: "Focus", value: "Frontend & UI/UX" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-purple-600 dark:text-purple-400">{item.icon}</div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">{item.label}</span>
                      </div>
                      <span className="font-semibold text-gray-800 dark:text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
