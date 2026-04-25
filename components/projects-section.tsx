import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ShoppingCart, Hospital } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Cart Management System",
      description:
        "A comprehensive web application for managing cards with full CRUD functionality, featuring efficient database interactions and responsive design.",
      icon: <ShoppingCart className="h-6 w-6" />,
      technologies: ["Django", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
      features: [
        "Card creation, editing, and deletion",
        "Advanced search functionality",
        "Django ORM integration",
        "Responsive Bootstrap interface",
      ],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce platform with complete shopping experience, user authentication, and secure payment processing.",
      icon: <ShoppingCart className="h-6 w-6" />,
      technologies: ["Django", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
      features: [
        "Product catalog management",
        "User authentication system",
        "Shopping cart functionality",
        "Secure checkout process",
        "Performance optimization",
      ],
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Hospital Management System",
      description:
        "A comprehensive system for managing hospital operations including patient records, appointments, billing, and inventory management.",
      icon: <Hospital className="h-6 w-6" />,
      technologies: ["MySQL", "Python"],
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Billing system",
        "Inventory tracking",
        "Data validation & error handling",
      ],
      color: "bg-red-500/10 text-red-600",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of web applications demonstrating proficiency in full-stack development, database management, and
            user experience design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${project.color}`}>{project.icon}</div>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm text-pretty">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
