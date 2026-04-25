import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, BookOpen } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Education & Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Academic background and professional training that shaped my development journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Training Experience */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Python Web Development Training</CardTitle>
                  <p className="text-sm text-muted-foreground">ARUDAN TECHNOLOGIES PVT. LTD.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  April 2024 - July 2024
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Completed a comprehensive training program focusing on Python web development and Django frameworks,
                gaining hands-on experience in building modern web applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Web Development</Badge>
                <Badge variant="secondary">Database Integration</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Current Status */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg text-foreground">Seeking Opportunities</CardTitle>
                  <p className="text-sm text-muted-foreground">Entry-Level Web Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Pratapgarh, Uttar Pradesh
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Actively seeking opportunities to apply my skills and knowledge in a professional environment. Ready to
                contribute to dynamic development teams and grow in the tech industry.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Problem Solving</Badge>
                <Badge variant="secondary">Team Collaboration</Badge>
                <Badge variant="secondary">Quick Learning</Badge>
                <Badge variant="secondary">Adaptability</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Education</h3>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Bachelor of Science + Bachelor of Education (BSc + BEd)
                    </h4>
                    <p className="text-muted-foreground">Shri Krishna University</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      Chhatarpur, Madhya Pradesh
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-sm font-medium text-foreground">September 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Intermediate</h4>
                    <p className="text-muted-foreground">St Anthony's Inter College</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      Pratapgarh, Uttar Pradesh
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-sm font-medium text-foreground">May 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">High School</h4>
                    <p className="text-muted-foreground">St Anthony's Inter College</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      Pratapgarh, Uttar Pradesh
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-sm font-medium text-foreground">May 2018</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Athletics & Achievements */}
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground text-center">Athletics & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Track & Field</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4 text-yellow-500" />
                    Gold medalist in 100-meter race
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4 text-yellow-500" />
                    Gold medalist in relay races
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4 text-gray-400" />
                    Silver medalist in long jump
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Team Sports</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4 text-yellow-500" />
                    Two-time gold medalist in Kabaddi
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    Active football player
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    Cricket team member
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                <strong>Leisure Activities:</strong> Cycling and reading for relaxation and personal growth
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
