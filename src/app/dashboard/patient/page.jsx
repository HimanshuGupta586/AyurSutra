import PatientDashboard from "./dashboard";

import { auth } from "@/auth"
import { getUser } from "@/data"

export default async function DashboardPage() {
  const session = await auth()
  const user = await getUser(session?.user?.email);

  return <PatientDashboard user={user}/>
}