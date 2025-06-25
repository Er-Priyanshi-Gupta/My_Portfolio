"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Github, Linkedin, Heart, Coffee, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you within 24 hours!",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong 😅",
        description: "Please try again or reach out to me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "priyanshi@example.com",
      description: "Drop me a line anytime",
      color: "from-purple-500 to-pink-500",
      href: "mailto:priyanshi@example.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India",
      description: "Available for remote work",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you soon",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Create Together!
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to collaborate on new projects and connect with fellow developers. Let's build something
            amazing together! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get In Touch</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you! I'm passionate about creating meaningful digital experiences and always open to discussing new
                opportunities.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">{info.title}</h4>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="text-lg font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">{info.value}</span>
                        )}
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Connect With Me</h4>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="https://github.com/Er-Priyanshi-Gupta" target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="https://linkedin.com/in/priyanshi-gupta" target="_blank">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>

            {/* Fun Section */}
            <Card className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Coffee className="h-6 w-6" />
                  <Heart className="h-6 w-6 animate-pulse" />
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h4 className="font-bold mb-2">Let's grab a virtual coffee!</h4>
                <p className="text-pink-100">
                  I love discussing new ideas, sharing experiences, and learning from fellow developers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Send className="h-6 w-6" />
                Send Me a Message
              </CardTitle>
              <p className="text-center text-purple-100">
                Fill out the form below and I'll get back to you as soon as possible!
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your amazing name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-2 border-purple-200 focus:border-purple-500 dark:border-purple-600 rounded-xl h-12 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-2 border-purple-200 focus:border-purple-500 dark:border-purple-600 rounded-xl h-12 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-2 border-purple-200 focus:border-purple-500 dark:border-purple-600 rounded-xl h-12 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you. ✨"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-2 border-purple-200 focus:border-purple-500 dark:border-purple-600 rounded-xl transition-all duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending your message...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
