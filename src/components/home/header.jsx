import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, Heart, Shield, Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="pt-20 pb-16 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-balance">
                Welcome to AyurSutra
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">Embrace the Wisdom of Ayurveda</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                AyurSutra is your gateway to authentic Ayurvedic healing and wellness. We combine ancient wisdom with
                modern understanding to provide personalized healthcare solutions that treat the root cause, not just
                symptoms. Our holistic approach focuses on balancing mind, body, and spirit for optimal health.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Holistic Healing</h3>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Natural Remedies</h3>
              </Card>
              <Card className="p-4 text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Personalized Care</h3>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src="/serene-ayurveda-meditation-herbs-natural-healing.jpg"
                alt="Ayurveda healing herbs and meditation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
              <Leaf className="w-12 h-12 text-secondary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
