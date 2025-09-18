import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout() {
    const session = await auth();
    if (session?.user.role === "doctor") {
        redirect("/dashboard/doctor")
    } else {
        redirect("/dashboard/patient")
    }
    // This return is never reached, but required for function signature
    return <></>;
}