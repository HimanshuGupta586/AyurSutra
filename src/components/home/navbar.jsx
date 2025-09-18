"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Leaf, Menu } from "lucide-react"
import { useState } from "react"
import ModeToggle from "@/components/themes/theme-toggle-btn"
import Link from 'next/link';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                            <Leaf className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold text-foreground">AyurSutra</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        {/* Desktop Login Buttons */}
                        <div className="hidden sm:flex items-center space-x-3">
                            <Button size="sm">
                                <Link href="/doctor/auth/login">Doctor Login</Link>
                            </Button>
                            <Button size="sm">
                                <Link href="/doctor/auth/login">
                                    Patient Login/Signup
                                </Link>
                            </Button>
                            <Button variant="outline" size="sm">
                                <Link href="">Contact</Link>
                            </Button>
                        </div>
                        <div className="px-5"><ModeToggle /></div>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="sm">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetTitle hidden>Menu</SheetTitle>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <div>
                                    <div className="pt-4 border-t">
                                        <div className="flex flex-col space-y-6 mt-6 p-5">
                                            <Button className="w-full">
                                                <Link href="/doctor/auth/login">Doctor Login</Link>
                                            </Button>
                                            <Button className="w-full">
                                                <Link href="/doctor/auth/login">
                                                    Patient Login/Signup
                                                </Link></Button>
                                            <Button variant="outline" className="w-full bg-transparent">
                                                <Link href="">Contact</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}
