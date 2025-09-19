"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Star, MapPin, Video } from "lucide-react"

export function AppointmentScheduler() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDoctor, setSelectedDoctor] = useState()
  const [selectedTime, setSelectedTime] = useState()

  const doctors = [
    {
      id: "1",
      name: "Dr. Rajesh Kumar",
      specialty: "Panchakarma Specialist",
      experience: "15 years",
      rating: 4.8,
      location: "Mumbai",
      consultationFee: "₹800",
      image: "/placeholder-wxno6.png",
    },
    {
      id: "2",
      name: "Dr. Meera Patel",
      specialty: "Ayurvedic Physician",
      experience: "12 years",
      rating: 4.9,
      location: "Delhi",
      consultationFee: "₹600",
      image: "/placeholder-munzq.png",
    },
    {
      id: "3",
      name: "Dr. Arjun Sharma",
      specialty: "Rasayana Specialist",
      experience: "20 years",
      rating: 4.7,
      location: "Bangalore",
      consultationFee: "₹1000",
      image: "/placeholder-kez0d.png",
    },
  ]

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ]

  const handleBookAppointment = () => {
    if (selectedDoctor && selectedTime) {
      alert(`Appointment booked with ${doctors.find((d) => d.id === selectedDoctor)?.name} at ${selectedTime}`)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Schedule Appointment</h1>
        <p className="text-muted-foreground mt-1">Book a consultation with our expert Ayurvedic doctors</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Doctor</CardTitle>
              <CardDescription>Select from our experienced Ayurvedic practitioners</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedDoctor === doctor.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedDoctor(doctor.id)}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{doctor.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{doctor.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span>{doctor.experience} experience</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{doctor.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-semibold text-primary">{doctor.consultationFee}</span>
                        <div className="flex space-x-2">
                          <Badge variant="secondary">Video Call</Badge>
                          <Badge variant="outline">In-person</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          {selectedDoctor && (
            <Card>
              <CardHeader>
                <CardTitle>Select Time Slot</CardTitle>
                <CardDescription>Available slots for {selectedDate.toDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className="text-xs"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedDoctor ? (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{doctors.find((d) => d.id === selectedDoctor)?.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{selectedDate.toDateString()}</span>
                    </div>
                    {selectedTime && (
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{selectedTime}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Consultation Fee</span>
                      <span className="font-semibold">
                        {doctors.find((d) => d.id === selectedDoctor)?.consultationFee}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" onClick={handleBookAppointment} disabled={!selectedTime}>
                    <Video className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">Please select a doctor to continue</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
