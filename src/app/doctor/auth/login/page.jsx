"use client"
import Link from "next/link"
import { useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Stethoscope } from "lucide-react"
import { doctorLogin } from "@/app/auth/actions"


export default function DoctorLogin() {
    const [showPassword, setShowPassword] = useState(false)
    const [state, action, pending] = useActionState(doctorLogin, undefined)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                            <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Doctor Portal</h2>
                        <p className="mt-2 text-sm text-primary">
                            Sign in to your AyurSutra account to access patient records and consultations
                        </p>
                    </div>

                    <div className="rounded-lg shadow-lg p-6 sm:p-8">
                        <form action={action} className="space-y-6">
                            <div className="flex items-center justify-center mb-6">
                                <Stethoscope className="h-6 w-6 text-emerald-600 mr-2" />
                                <span className="text-lg font-semibold ">Doctor Login</span>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium ">
                                    Medical License Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="doctor@hospital.com"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium ">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        required
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password"
                                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {state?.errors && <p>{state.errors}</p>}
                            <Button
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 text-center block cursor-pointer"
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    )
}
