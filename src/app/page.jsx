import { Navbar } from "@/components/home/navbar"
import { HeroSection } from "@/components/home/hero-section"
import TeamFooter from "@/components/home/team-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TeamFooter />
    </main>
  )
}
