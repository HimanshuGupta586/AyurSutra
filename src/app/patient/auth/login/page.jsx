"use client"

import { useState, useActionState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Leaf, User, Mail, Lock } from "lucide-react"
import { patientLogin } from "@/app/auth/actions"

export default function PatientLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [state, action, pending] = useActionState(patientLogin, undefined)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-emerald-100 p-3 rounded-full">
              <Leaf className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold ">Patient Login</h1>
          <p className="text-emerald-600">Access your AyurSutra health portal</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg border-0 ">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl text-center ">Welcome Back</CardTitle>
            <CardDescription className="text-center ">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form action={action} className="space-y-4">
              {/* Email or Username */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium ">
                  Email
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your email or username"
                    value={loginData.email}
                    onChange={handleInputChange}
                    className="pl-10 h-11 border-gray-200 focus:border-emerald-500 "
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 h-11 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
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
              {/* Login Button */}
              <Button type="submit" className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-medium cursor-pointer" disabled={pending}>
                {pending ? "Logging In..." : "Login"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-6">
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/patient/auth/signup" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Sign up here
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm  hover:text-emerald-600 font-medium">
            ← Back to AyurSutra
          </Link>
        </div>
      </div>
    </div>
  )
}
