"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Heart, Activity, Pill, ArrowRight, Leaf, Video } from "lucide-react"

export function DashboardOverview({fname}) {
  const upcomingAppointments = [
    {
      doctor: "Dr. Rajesh Kumar",
      specialty: "Panchakarma Specialist",
      date: "Today, 2:30 PM",
      type: "Follow-up",
    },
    {
      doctor: "Dr. Meera Patel",
      specialty: "Ayurvedic Physician",
      date: "Tomorrow, 10:00 AM",
      type: "Consultation",
    },
  ]

  const healthMetrics = [
    { label: "Dosha Balance", value: "Vata Dominant", status: "balanced" },
    { label: "Energy Level", value: "85%", status: "good" },
    { label: "Sleep Quality", value: "7.5/10", status: "good" },
    { label: "Stress Level", value: "Low", status: "excellent" },
  ]

  const recentMedicines = [
    { name: "Ashwagandha Churna", dosage: "1 tsp twice daily", status: "active" },
    { name: "Triphala Tablets", dosage: "2 tablets before bed", status: "active" },
    { name: "Brahmi Oil", dosage: "Head massage 3x/week", status: "completed" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Welcome back, {fname}</h1>
          <p className="text-muted-foreground mt-1">Here's your wellness journey overview</p>
        </div>
        <div className="flex items-center space-x-2 text-primary">
          <Leaf className="w-5 h-5" />
          <span className="text-sm font-medium">Ayurvedic Wellness Score: 82/100</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Next Appointment</p>
                <p className="text-xs text-muted-foreground">Today, 2:30 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm font-medium">Health Score</p>
                <p className="text-xs text-muted-foreground">82/100 - Good</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Pill className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Active Medicines</p>
                <p className="text-xs text-muted-foreground">3 prescriptions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm font-medium">Treatment Days</p>
                <p className="text-xs text-muted-foreground">45 days completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Appointments</span>
            </CardTitle>
            <CardDescription>Your scheduled consultations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">{appointment.doctor}</p>
                  <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{appointment.date}</span>
                    <Badge variant="secondary" className="text-xs">
                      {appointment.type}
                    </Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Video className="w-4 h-4 mr-1" />
                  Join
                </Button>
              </div>
            ))}
            <Button className="w-full bg-transparent" variant="outline">
              View All Appointments
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Health Metrics</span>
            </CardTitle>
            <CardDescription>Your current wellness indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{metric.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{metric.value}</span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      metric.status === "excellent"
                        ? "bg-green-500"
                        : metric.status === "good"
                          ? "bg-blue-500"
                          : metric.status === "balanced"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }`}
                  />
                </div>
              </div>
            ))}
            <Button className="w-full bg-transparent" variant="outline">
              View Detailed Report
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Medicines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Pill className="w-5 h-5" />
            <span>Current Medications</span>
          </CardTitle>
          <CardDescription>Your prescribed Ayurvedic medicines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentMedicines.map((medicine, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{medicine.name}</h4>
                  <Badge variant={medicine.status === "active" ? "default" : "secondary"}>{medicine.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{medicine.dosage}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
