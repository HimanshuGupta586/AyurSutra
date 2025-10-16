import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link";

export default function TeamFooter() {
  const teamMembers = [
    {
      name: "Himanshu Gupta",
      role: "Backend Developer",
      linkedinUrl: "https://www.linkedin.com/in/himanshu-gupta-05b59837b/",
      githubUrl: "https://github.com/HimanshuGupta586",
    },
    {
      name: "Vinayak Yadav",
      role: "Frontend Developer",
      linkedinUrl: "https://www.linkedin.com/in/vinayak-yadav-75363937b",
      githubUrl: "https://github.com/vinayakydv733",
    },
  ]

  return (
    <footer className="bg-muted py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Meet Team NextGen</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our passionate team combines expertise in technology and Ayurveda to bring you the best digital healthcare
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <Link href={member.linkedinUrl} className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  {member.githubUrl && <Link href={member.githubUrl} className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-lg font-bold text-foreground">AyurSutra</span>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                © 2025 AyurSutra by Team NextGen. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">Bridging ancient wisdom with modern technology</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
