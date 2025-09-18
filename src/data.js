'use server'

import connectDB from "@/lib/connectDB"
import Patient from "@/lib/models/Patient"

export async function getUser(email) {
    await connectDB();

    const user = await Patient.findOne({email})
    return {
        email: user.email,
        fname: user.fname,
        lname: user.lname,
        username: user.username,
    }
}