import DoctorDashboard from "./dashboard";
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DoctorDashboardPage() {
      const session = await auth();
  return(
    <DoctorDashboard />
  )
}