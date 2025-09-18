import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div
        className="absolute inset-0 opacity-10 min-h-full"
        style={{
          backgroundImage: `url('/ayurvedic-herbs-and-leaves-pattern.jpg')`,
        }}
      />

      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 m-4 sm:mb-6 text-balance leading-tight">
            Discover the Healing Power of <span className="text-primary">Ayurveda</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            AyurSutra bridges ancient Ayurvedic wisdom with modern healthcare, connecting you with certified
            practitioners for personalized healing journeys rooted in 5,000 years of natural medicine.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Holistic Healing</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Treat the root cause, not just symptoms, with personalized Ayurvedic treatments.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Certified Practitioners</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Connect with qualified Ayurvedic doctors and therapists for authentic care.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center sm:col-span-2 lg:col-span-1">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Ancient Wisdom</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Experience time-tested remedies backed by thousands of years of practice.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
