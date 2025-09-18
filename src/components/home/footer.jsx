import { Card } from "@/components/ui/card"
import { Users, Award, Heart, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Meet the NextGen Team</h2>
              <p className="text-xl text-primary-foreground/90">Innovating Healthcare for Tomorrow</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-primary-foreground/80 leading-relaxed">
                NextGen is a passionate team of healthcare innovators, Ayurvedic practitioners, and technology experts
                dedicated to making authentic Ayurvedic wisdom accessible to everyone. We believe in the power of
                personalized medicine and are committed to bridging the gap between traditional healing and modern
                healthcare needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Expert Team</p>
                  <p className="text-sm text-primary-foreground/70">Certified practitioners</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Proven Results</p>
                  <p className="text-sm text-primary-foreground/70">Thousands helped</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-6">
              <Heart className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
              <p className="text-primary-foreground/80 text-sm">
                Every patient receives personalized attention and care tailored to their unique constitution.
              </p>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-6">
              <Zap className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-primary-foreground/80 text-sm">
                Combining ancient wisdom with cutting-edge technology for optimal health outcomes.
              </p>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-secondary-foreground" />
              </div>
              <span className="font-semibold">NextGen Healthcare Team</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              © 2025 AyurSutra by NextGen. Transforming lives through Ayurveda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
