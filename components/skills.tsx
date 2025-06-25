"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code2, Palette, Wrench, Globe, Star } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code2 className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML/CSS", level: 95, description: "Semantic markup & modern CSS" },
        { name: "JavaScript", level: 90, description: "ES6+ & modern frameworks" },
        { name: "React", level: 85, description: "Hooks, Context, & best practices" },
        { name: "Next.js", level: 80, description: "SSR, SSG, & App Router" },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "JavaScript", level: 90, description: "Modern JS & TypeScript" },
        { name: "Python", level: 75, description: "Backend & automation" },
        { name: "Java", level: 70, description: "OOP & data structures" },
        { name: "C/C++", level: 80, description: "System programming" },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: 90, description: "Design systems & prototyping" },
        { name: "Adobe XD", level: 85, description: "UI design & wireframing" },
        { name: "UI/UX Design", level: 80, description: "User-centered design" },
        { name: "Responsive Design", level: 95, description: "Mobile-first approach" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Git/GitHub", level: 85, description: "Version control & collaboration" },
        { name: "GitHub Pages", level: 90, description: "Static site deployment" },
        { name: "Node.js", level: 75, description: "Backend development" },
        { name: "VS Code", level: 95, description: "Development environment" },
      ],
    },
  ]

  const technologies = [
    { name: "HTML5", category: "markup" },
    { name: "CSS3", category: "styling" },
    { name: "JavaScript", category: "programming" },
    { name: "React", category: "framework" },
    { name: "Next.js", category: "framework" },
    { name: "Node.js", category: "runtime" },
    { name: "Python", category: "programming" },
    { name: "Java", category: "programming" },
    { name: "C++", category: "programming" },
    { name: "Git", category: "tool" },
    { name: "Figma", category: "design" },
    { name: "Adobe XD", category: "design" },
    { name: "Tailwind CSS", category: "styling" },
    { name: "TypeScript", category: "programming" },
    { name: "Responsive Design", category: "concept" },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      markup: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      styling: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      programming: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      framework: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      runtime: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      tool: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
      design: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      concept: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    }
    return colors[category as keyof typeof colors] || colors.tool
  }

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-gray-800/50 dark:to-purple-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-xl">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <span className="text-gray-800 dark:text-white">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Technologies I Work With
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              A diverse set of tools and technologies that power my development workflow
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${getCategoryColor(tech.category)}`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
