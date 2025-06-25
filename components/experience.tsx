"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, Code2, Users, Lightbulb, GraduationCap, Trophy } from "lucide-react"

export function Experience() {
  const workExperience = {
    company: "EchoTech",
    role: "Frontend Developer",
    duration: "2022 - Present",
    location: "India",
    type: "Full-time",
    description: [
      "Developing responsive and interactive web applications using React, Next.js, and modern JavaScript",
      "Collaborating with design teams to implement pixel-perfect UI/UX designs using Figma and Adobe XD",
      "Optimizing application performance and ensuring cross-browser compatibility across all major browsers",
      "Mentoring junior developers and contributing to code reviews and best practices documentation",
      "Leading frontend architecture decisions and implementing scalable component libraries",
    ],
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "HTML/CSS", "Figma", "Git"],
    achievements: [
      "Improved application load time by 40% through code optimization and lazy loading",
      "Led the frontend development of 5+ major client projects with 100% on-time delivery",
      "Implemented responsive design patterns that increased mobile user engagement by 60%",
      "Contributed to the company's design system used across 10+ projects",
      "Reduced bug reports by 35% through comprehensive testing and code reviews",
    ],
  }

  const education = {
    institution: "Self-Directed Learning Path",
    degree: "Software Engineering & Frontend Development",
    duration: "2021 - Present",
    location: "India",
    type: "Continuous Learning",
    description: [
      "Pursuing comprehensive software engineering education through online courses, bootcamps, and practical projects",
      "Focusing on modern frontend development, UI/UX design principles, and software engineering best practices",
      "Building real-world projects to apply theoretical knowledge and develop practical skills",
      "Staying updated with latest industry trends, frameworks, and development methodologies",
      "Participating in developer communities and contributing to open-source projects",
    ],
    skills: [
      "Problem Solving",
      "Self-directed Learning",
      "Project Management",
      "Technical Research",
      "Community Engagement",
    ],
    certifications: [
      "Frontend Development Specialization",
      "React & Next.js Certification",
      "UI/UX Design Fundamentals",
      "JavaScript Advanced Concepts",
    ],
  }

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-gray-800/50 dark:to-purple-900/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey and continuous learning path in software development
          </p>
        </div>

        <div className="space-y-12">
          {/* Work Experience */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <Building className="h-6 w-6" />
                    </div>
                    {workExperience.role}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-purple-100 font-semibold mb-2">
                    <Building className="h-4 w-4" />
                    {workExperience.company}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge className="w-fit bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    {workExperience.type}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 text-sm text-purple-100">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {workExperience.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {workExperience.location}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-lg text-gray-800 dark:text-white">
                  <Code2 className="h-5 w-5 text-purple-600" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {workExperience.description.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start gap-3">
                      <span className="text-purple-600 mt-2 text-sm">●</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-lg text-gray-800 dark:text-white">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {workExperience.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start gap-3">
                      <span className="text-green-600 mt-2 text-sm">✓</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-lg text-gray-800 dark:text-white">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {workExperience.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200 border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    {education.degree}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-blue-100 font-semibold mb-2">
                    <GraduationCap className="h-4 w-4" />
                    {education.institution}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge className="w-fit bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    {education.type}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 text-sm text-blue-100">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {education.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {education.location}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-lg text-gray-800 dark:text-white">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  Learning Focus Areas
                </h4>
                <ul className="space-y-3">
                  {education.description.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start gap-3">
                      <span className="text-blue-600 mt-2 text-sm">●</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-lg text-gray-800 dark:text-white">
                  <Users className="h-5 w-5 text-green-600" />
                  Core Skills Developed
                </h4>
                <div className="flex flex-wrap gap-3">
                  {education.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200 border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-lg text-gray-800 dark:text-white">Certifications & Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {education.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
                    >
                      <Trophy className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
