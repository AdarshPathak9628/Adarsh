"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">AP</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 text-balance">Adarsh Pathak</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">Aspiring Python Web Developer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Passionate about creating efficient and user-friendly web applications with Django, HTML, CSS, and
            JavaScript. Ready to contribute to dynamic development teams.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>

        <Button variant="ghost" size="lg" onClick={scrollToAbout} className="animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
