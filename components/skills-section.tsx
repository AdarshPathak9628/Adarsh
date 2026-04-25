import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const technicalSkills = [
    { name: "Python (Django)", level: 85 },
    { name: "HTML/HTML5", level: 90 },
    { name: "CSS/Bootstrap", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "SQLite3", level: 80 },
  ]

  const frameworks = [
    { name: "Django", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "NumPy", level: 70 },
    { name: "Matplotlib", level: 65 },
  ]

  const otherSkills = [
    "ORM in Python",
    "Networking (OSI Model)",
    "IP/TCP Protocol",
    "IoT Basics",
    "Data Validation",
    "Error Handling",
  ]

  const certifications = [
    "O Level Certification (NIELIT)",
    "Python Web Development Training",
    "Tally Certification",
    "CCC Certification",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive skill set in modern web development technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Programming & Web Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Libraries & Frameworks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {frameworks.map((framework) => (
                <div key={framework.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{framework.name}</span>
                    <span className="text-sm text-muted-foreground">{framework.level}%</span>
                  </div>
                  <Progress value={framework.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Additional Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {otherSkills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-2 rounded-md text-sm font-medium text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center p-3 bg-accent/10 rounded-md">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
