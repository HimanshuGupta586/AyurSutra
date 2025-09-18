import 'server-only'
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Patient from "@/lib/models/Patient"
import Doctor from './lib/models/Doctor'
import connectDB from "@/lib/connectDB"

const callbacks = {
  authorized: async ({ auth }) => {
    // Logged in users are authenticated, otherwise redirect to login page
    return !!auth
  },
  async jwt({ token, user }) {
    if (user) { // User is available during sign-in
      token.username = user.username
      token.role = user.role
    }
    return token

  },
  session({ session, token }) {
    session.user.username = token.username
    session.user.role = token.role
    return session
  },
}

const providers = [
  Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      role: {},
    },
    authorize: async (credentials) => {
      try {
        let user = null

        await connectDB()
        let role = credentials.role

        if(role === 'doctor') {
          user = await Doctor.findOne({ email: credentials.email })
        } else {
          user = await Patient.findOne({ email: credentials.email })
        }

        // return user object with their profile data
        return user
      } catch (error) {
        console.log(error)
      }

    },
  }),
]

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks,
  providers,
  pages: {
    signIn: '/patient/auth/login',
  }
})