"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Users,
  Clock,
  FileText,
  Activity,
  TrendingUp,
  Bell,
  Search,
  MoreVertical,
  Phone,
  Mail,
  Stethoscope,
  AlertCircle,
  CheckCircle,
  User,
  CalendarDays,
  Leaf,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for the dashboard
const mockData = {
  stats: {
    totalPatients: 1247,
    todayAppointments: 12,
    pendingReports: 8,
    completedToday: 9,
  },
  todaySchedule: [
    {
      id: 1,
      time: "09:00 AM",
      patient: "Priya Sharma",
      type: "Consultation",
      status: "confirmed",
      duration: "30 min",
      condition: "Digestive Issues",
    },
    {
      id: 2,
      time: "10:30 AM",
      patient: "Rajesh Kumar",
      type: "Follow-up",
      status: "completed",
      duration: "20 min",
      condition: "Arthritis Treatment",
    },
    {
      id: 3,
      time: "11:00 AM",
      patient: "Anita Patel",
      type: "New Patient",
      status: "confirmed",
      duration: "45 min",
      condition: "Stress & Anxiety",
    },
    {
      id: 4,
      time: "02:00 PM",
      patient: "Vikram Singh",
      type: "Consultation",
      status: "pending",
      duration: "30 min",
      condition: "Skin Disorders",
    },
    {
      id: 5,
      time: "03:30 PM",
      patient: "Meera Joshi",
      type: "Treatment Review",
      status: "confirmed",
      duration: "25 min",
      condition: "Diabetes Management",
    },
  ],
  recentPatients: [
    {
      id: 1,
      name: "Priya Sharma",
      age: 34,
      lastVisit: "2024-01-15",
      condition: "Digestive Issues",
      dosha: "Pitta",
      status: "Active Treatment",
      phone: "+91 98765 43210",
      email: "priya.sharma@email.com",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      age: 52,
      lastVisit: "2024-01-14",
      condition: "Arthritis",
      dosha: "Vata",
      status: "Follow-up Required",
      phone: "+91 98765 43211",
      email: "rajesh.kumar@email.com",
    },
    {
      id: 3,
      name: "Anita Patel",
      age: 28,
      lastVisit: "2024-01-13",
      condition: "Stress & Anxiety",
      dosha: "Vata-Pitta",
      status: "New Patient",
      phone: "+91 98765 43212",
      email: "anita.patel@email.com",
    },
    {
      id: 4,
      name: "Vikram Singh",
      age: 41,
      lastVisit: "2024-01-12",
      condition: "Skin Disorders",
      dosha: "Kapha",
      status: "Treatment Plan Review",
      phone: "+91 98765 43213",
      email: "vikram.singh@email.com",
    },
  ],
  reports: [
    {
      id: 1,
      patient: "Priya Sharma",
      type: "Blood Test",
      date: "2024-01-14",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      patient: "Rajesh Kumar",
      type: "X-Ray Report",
      date: "2024-01-13",
      status: "reviewed",
      priority: "medium",
    },
    {
      id: 3,
      patient: "Meera Joshi",
      type: "Pulse Analysis",
      date: "2024-01-12",
      status: "pending",
      priority: "low",
    },
  ],
}

export default function DoctorDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-yellow-600"
      case "low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">AyurSutra</h1>
              <p className="text-xs text-muted-foreground">Doctor Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-destructive rounded-full"></span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/caring-doctor.png" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-sidebar min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            <Button
              variant={selectedTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start gap-2"
              onClick={() => setSelectedTab("overview")}
            >
              <Activity className="h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={selectedTab === "appointments" ? "default" : "ghost"}
              className="w-full justify-start gap-2"
              onClick={() => setSelectedTab("appointments")}
            >
              <Calendar className="h-4 w-4" />
              Appointments
            </Button>
            <Button
              variant={selectedTab === "patients" ? "default" : "ghost"}
              className="w-full justify-start gap-2"
              onClick={() => setSelectedTab("patients")}
            >
              <Users className="h-4 w-4" />
              Patients
            </Button>
            <Button
              variant={selectedTab === "reports" ? "default" : "ghost"}
              className="w-full justify-start gap-2"
              onClick={() => setSelectedTab("reports")}
            >
              <FileText className="h-4 w-4" />
              Reports
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {selectedTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockData.stats.totalPatients}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-600">+12%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockData.stats.todayAppointments}</div>
                    <p className="text-xs text-muted-foreground">{mockData.stats.completedToday} completed</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockData.stats.pendingReports}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-red-600">3 urgent</span>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">94%</div>
                    <Progress value={94} className="mt-2" />
                  </CardContent>
                </Card>
              </div>

              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Today's Schedule
                  </CardTitle>
                  <CardDescription>
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.todaySchedule.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-sm font-medium text-muted-foreground min-w-[80px]">
                            {appointment.time}
                          </div>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {appointment.patient
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{appointment.patient}</p>
                              <p className="text-sm text-muted-foreground">{appointment.condition}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{appointment.duration}</span>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedTab === "appointments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Appointments</h2>
                <Button className="gap-2">
                  <Calendar className="h-4 w-4" />
                  New Appointment
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search appointments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.todaySchedule.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-sm font-medium text-muted-foreground min-w-[80px]">
                            {appointment.time}
                          </div>
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              {appointment.patient
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{appointment.patient}</p>
                            <p className="text-sm text-muted-foreground">{appointment.condition}</p>
                            <p className="text-xs text-muted-foreground">
                              {appointment.type} • {appointment.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedTab === "patients" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Patients</h2>
                <Button className="gap-2">
                  <User className="h-4 w-4" />
                  Add Patient
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search patients..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by dosha" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Doshas</SelectItem>
                        <SelectItem value="vata">Vata</SelectItem>
                        <SelectItem value="pitta">Pitta</SelectItem>
                        <SelectItem value="kapha">Kapha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.recentPatients.map((patient) => (
                      <div
                        key={patient.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {patient.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{patient.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Age: {patient.age} • Dosha: {patient.dosha}
                            </p>
                            <p className="text-sm text-muted-foreground">{patient.condition}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium">{patient.status}</p>
                            <p className="text-xs text-muted-foreground">Last visit: {patient.lastVisit}</p>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Stethoscope className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedTab === "reports" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Patient Reports</h2>
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  Generate Report
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pending Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockData.reports
                        .filter((r) => r.status === "pending")
                        .map((report) => (
                          <div key={report.id} className="flex items-center justify-between p-3 border rounded">
                            <div>
                              <p className="font-medium text-sm">{report.patient}</p>
                              <p className="text-xs text-muted-foreground">{report.type}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <AlertCircle className={`h-4 w-4 ${getPriorityColor(report.priority)}`} />
                              <span className="text-xs">{report.date}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Reviewed Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockData.reports
                        .filter((r) => r.status === "reviewed")
                        .map((report) => (
                          <div key={report.id} className="flex items-center justify-between p-3 border rounded">
                            <div>
                              <p className="font-medium text-sm">{report.patient}</p>
                              <p className="text-xs text-muted-foreground">{report.type}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-xs">{report.date}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Report Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Blood Tests</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>X-Ray Reports</span>
                          <span>30%</span>
                        </div>
                        <Progress value={30} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Pulse Analysis</span>
                          <span>25%</span>
                        </div>
                        <Progress value={25} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>All Reports</CardTitle>
                  <CardDescription>Complete list of patient reports and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.reports.map((report) => (
                      <div
                        key={report.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{report.patient}</p>
                            <p className="text-sm text-muted-foreground">{report.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm">{report.date}</p>
                            <div className="flex items-center gap-1">
                              {report.status === "pending" ? (
                                <AlertCircle className={`h-3 w-3 ${getPriorityColor(report.priority)}`} />
                              ) : (
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              )}
                              <span className="text-xs capitalize">{report.status}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
