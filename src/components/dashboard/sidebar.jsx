"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Video, Pill, TrendingUp, Home, Leaf, User } from "lucide-react"
import { signOut } from "next-auth/react"



export function Sidebar({ activeSection, setActiveSection, fname, lname, username }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "consultation", label: "Consultation", icon: Video },
    { id: "pharmacy", label: "Pharmacy", icon: Pill },
    { id: "progress", label: "Progress", icon: TrendingUp },
  ]

  return (
    <div className="w-64 bg-card border-r border-border p-4 space-y-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Leaf className="w-5 h-5 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold text-primary">AyurSutra</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection(item.id)}
            >
              <Icon className="w-4 h-4 mr-2" />
              {item.label}
            </Button>
          )
        })}
      </nav>

      {/* User Profile */}
      <Card className="p-4 mt-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm">{fname + " " + lname}</p>
            <p className="text-xs text-muted-foreground">Patient ID: {username}</p>
          </div>
        </div>
      </Card>
      <div>
      </div >
      <div className="mt-4">
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    </div>
  )
}
