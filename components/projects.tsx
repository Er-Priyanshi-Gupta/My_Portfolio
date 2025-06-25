"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Palette, Code2, Thermometer, UserPlus, Star, Eye } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "AI Virtual Mouse Landing Page",
      description:
        "A stunning, modern landing page showcasing an AI virtual mouse project with smooth animations and interactive elements.",
      icon: <Palette className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["JavaScript", "HTML5", "CSS3", "Animations"],
      features: [
        "Modern responsive design",
        "Smooth scroll animations",
        "Interactive UI elements",
        "Cross-browser compatibility",
        "Performance optimized",
      ],
      links: {
        github: "https://github.com/Er-Priyanshi-Gupta/Landing-Page",
        demo: "#",
      },
      status: "Featured",
      color: "from-purple-500 to-pink-500",
      stats: { stars: 12, views: 245 },
    },
    {
      title: "Temperature Converter App",
      description: "An elegant temperature conversion tool with real-time calculations and beautiful UI design.",
      icon: <Thermometer className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["CSS3", "JavaScript", "HTML5", "Responsive Design"],
      features: [
        "Real-time temperature conversion",
        "Multiple unit support (°C, °F, K)",
        "Clean, intuitive interface",
        "Input validation & error handling",
        "Mobile-first design",
      ],
      links: {
        github: "https://github.com/Er-Priyanshi-Gupta/Temperature-Converter",
        demo: "#",
      },
      status: "Completed",
      color: "from-blue-500 to-cyan-500",
      stats: { stars: 8, views: 156 },
    },
    {
      title: "Personal Portfolio Website",
      description:
        "My first portfolio website showcasing projects and skills with a focus on clean design and user experience.",
      icon: <Code2 className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      features: [
        "Personal branding & storytelling",
        "Project showcase gallery",
        "Skills & experience timeline",
        "Contact form integration",
        "SEO optimized",
      ],
      links: {
        github: "https://github.com/Er-Priyanshi-Gupta/My-Portfolio",
        demo: "#",
      },
      status: "Live",
      color: "from-pink-500 to-rose-500",
      stats: { stars: 15, views: 320 },
    },
    {
      title: "User Registration System",
      description:
        "A secure and modern user registration form with comprehensive validation and smooth user experience.",
      icon: <UserPlus className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML5", "CSS3", "JavaScript", "Form Validation"],
      features: [
        "Comprehensive form validation",
        "Real-time error feedback",
        "Secure input handling",
        "Accessibility compliant",
        "Progressive enhancement",
      ],
      links: {
        github: "https://github.com/Er-Priyanshi-Gupta/Registration-page",
        demo: "#",
      },
      status: "Completed",
      color: "from-green-500 to-emerald-500",
      stats: { stars: 6, views: 98 },
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my passion for frontend development and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-lg`}>
                    {project.status}
                  </Badge>
                </div>

                {/* Stats */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-white text-sm">
                    <Star className="w-3 h-3 fill-current" />
                    {project.stats.stars}
                  </div>
                  <div className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-white text-sm">
                    <Eye className="w-3 h-3" />
                    {project.stats.views}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <span className="text-gray-800 dark:text-white">{project.title}</span>
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-purple-500 mt-1 text-xs">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-purple-200 text-purple-700 dark:border-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    asChild
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <Link href={project.links.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-300 dark:hover:bg-purple-900/20 transition-all duration-300"
                  >
                    <Link href={project.links.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="mb-6 opacity-90">Check out my GitHub profile for more projects and contributions</p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="https://github.com/Er-Priyanshi-Gupta" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  Explore GitHub Profile
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
