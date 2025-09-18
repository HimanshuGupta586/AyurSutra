"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Video, MessageCircle, Phone, Calendar, Clock, Send, Paperclip, Mic } from "lucide-react"

export function DoctorConsultation() {
  const [activeChat, setActiveChat] = useState()
  const [message, setMessage] = useState("")

  const consultations = [
    {
      id: "1",
      doctor: "Dr. Rajesh Kumar",
      specialty: "Panchakarma Specialist",
      status: "online",
      lastMessage: "Please continue with the prescribed medicines",
      time: "2 min ago",
      unread: 2,
    },
    {
      id: "2",
      doctor: "Dr. Meera Patel",
      specialty: "Ayurvedic Physician",
      status: "offline",
      lastMessage: "Your reports look good. See you next week.",
      time: "1 hour ago",
      unread: 0,
    },
  ]

  const chatMessages = [
    {
      id: "1",
      sender: "doctor",
      message: "Good morning! How are you feeling today?",
      time: "10:30 AM",
    },
    {
      id: "2",
      sender: "patient",
      message: "Good morning Doctor. I'm feeling much better after starting the Ashwagandha.",
      time: "10:32 AM",
    },
    {
      id: "3",
      sender: "doctor",
      message: "That's excellent news! Continue with the current dosage. Any side effects?",
      time: "10:35 AM",
    },
    {
      id: "4",
      sender: "patient",
      message: "No side effects so far. My sleep has improved significantly.",
      time: "10:37 AM",
    },
  ]

  const upcomingConsultations = [
    {
      doctor: "Dr. Rajesh Kumar",
      date: "Today",
      time: "2:30 PM",
      type: "Video Call",
    },
    {
      doctor: "Dr. Meera Patel",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "Phone Call",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Doctor Consultation</h1>
        <p className="text-muted-foreground mt-1">Connect with your healthcare providers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat List */}
        <Card>
          <CardHeader>
            <CardTitle>Active Consultations</CardTitle>
            <CardDescription>Your ongoing conversations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {consultations.map((consultation) => (
              <div
                key={consultation.id}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  activeChat === consultation.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setActiveChat(consultation.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-sm">{consultation.doctor}</h4>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          consultation.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{consultation.specialty}</p>
                    <p className="text-xs mt-1 truncate">{consultation.lastMessage}</p>
                    <p className="text-xs text-muted-foreground mt-1">{consultation.time}</p>
                  </div>
                  {consultation.unread > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {consultation.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-2">
          <CardHeader>
            {activeChat ? (
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Dr. Rajesh Kumar</CardTitle>
                  <CardDescription>Panchakarma Specialist • Online</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <CardTitle>Select a consultation</CardTitle>
                <CardDescription>Choose a doctor to start chatting</CardDescription>
              </div>
            )}
          </CardHeader>
          <CardContent>
            {activeChat ? (
              <div className="space-y-4">
                {/* Chat Messages */}
                <div className="h-64 overflow-y-auto space-y-3 p-3 bg-muted/20 rounded-lg">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "patient" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.sender === "patient" ? "bg-primary text-primary-foreground" : "bg-card border"
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.sender === "patient" ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Textarea
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[40px] pr-20"
                    />
                    <div className="absolute right-2 top-2 flex space-x-1">
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Paperclip className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Mic className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <Button size="sm">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Select a consultation to start messaging</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Consultations */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Consultations</CardTitle>
          <CardDescription>Your scheduled appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingConsultations.map((consultation, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{consultation.doctor}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{consultation.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{consultation.time}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      {consultation.type}
                    </Badge>
                  </div>
                  <Button size="sm">
                    <Video className="w-4 h-4 mr-1" />
                    Join
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
