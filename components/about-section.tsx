import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Trophy, Code, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A dedicated and analytical problem-solver with strong skills in Python web development. Committed to
            leveraging my technical expertise and passion for innovation to contribute to dynamic development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in Django, HTML, CSS, JavaScript, and modern web technologies
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                BSc + BEd from Shri Krishna University with strong academic foundation
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Athletics</h3>
              <p className="text-sm text-muted-foreground">
                Gold medalist in track & field and kabaddi, demonstrating dedication and teamwork
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Goal-Oriented</h3>
              <p className="text-sm text-muted-foreground">
                Seeking entry-level opportunities to begin a successful career in web development
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Analytical & Problem-Solving</h4>
              <p className="text-muted-foreground">
                Excellent at breaking down complex problems and finding innovative solutions through systematic
                analysis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Teamwork & Communication</h4>
              <p className="text-muted-foreground">
                Proven ability to work effectively in teams and communicate clearly, demonstrated through sports and
                academic projects.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Adaptability & Learning</h4>
              <p className="text-muted-foreground">
                Quick learner who adapts to new environments and is eager to expand knowledge and skills continuously.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Dedication & Development</h4>
              <p className="text-muted-foreground">
                Committed to continuous learning and professional skill enhancement in the rapidly evolving tech
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
