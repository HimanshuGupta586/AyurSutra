"use client"
import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { AppointmentScheduler } from "@/components/dashboard/appointment-scheduler"
import { DoctorConsultation } from "@/components/dashboard/doctor-consultation"
import { ProgressTracking } from "@/components/dashboard/progress-tracking"
import { PharmacySection } from "@/components/dashboard/pharmacy-section"

import AIPopover from "@/components/ui/ai-popover"

export default function PatientDashboard({user}) {
  const [activeSection, setActiveSection] = useState("dashboard")

  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview fname={user.fname}/>
      case "appointments":
        return <AppointmentScheduler />
      case "consultation":
        return <DoctorConsultation />
      case "pharmacy":
        return <PharmacySection />
      case "progress":
        return <ProgressTracking />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} fname={user.fname} lname={user.lname} username={user.username} />
      <main className="flex-1 p-4 md:p-6 lg:p-8">{renderActiveSection()}</main>
      <AIPopover />
    </div>
  )
}
