import { auth } from "@/auth"
 
export default auth((req) => {
  if (!req.auth && (req.nextUrl.pathname !== "/doctor/auth/login" && req.nextUrl.pathname !== "/patient/auth/login" && req.nextUrl.pathname !== "/patient/auth/signup" && req.nextUrl.pathname !== "/")) {
    const newUrl = new URL("/patient/auth/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }

  if (req.auth && (req.nextUrl.pathname === "/patient/auth/login" || req.nextUrl.pathname === "/patient/auth/signup")) {
    const newUrl = new URL("/", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})


export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }