'use server'

import Patient from '@/lib/models/Patient'
import Doctor from '@/lib/models/Doctor'
import { SignupFormSchema } from '@/lib/definitions'
import { hashPassword, comparePasswords } from '@/lib/password'
import { signIn } from '@/auth'
import connectDB from '@/lib/connectDB'

export async function doctorLogin(state, formData){
    await connectDB();
    const email = formData.get('email')
    const password = formData.get('password')

    await connectDB()

    if (!(await Doctor.exists({ email }))) {
        return { errors: 'Invalid Credentials' }
    }

    let user = await Doctor.findOne({email})
    let comp = await comparePasswords(password, user.password)

    if (!comp){
        return { errors: 'Invalid Credentials' }
    }

    await signIn('credentials', {
        email,
        redirectTo: '/'
    })

}

export async function patientLogin(state, formData){

    const email = formData.get('email')
    const password = formData.get('password')

    await connectDB()

    if (!(await Patient.exists({ email }))) {
        return { errors: 'Invalid Credentials' }
    }

    let user = await Patient.findOne({email})
    let comp = await comparePasswords(password, user.password)

    if (!comp){
        return { errors: 'Invalid Credentials' }
    }

    await signIn('credentials', {
        email: user.email,
        role: user.role,
        redirectTo: '/'
    })

}

export async function patientSignup(state, formData) {
    const validatedFields = SignupFormSchema.safeParse({
        fname: formData.get('firstName'),
        lname: formData.get('lastName'),
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    })
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    
    const {fname, lname, username, email, password } = validatedFields.data

    await connectDB()

    if (await Patient.exists({ username })) {
        return { errors: 'Username already exists' }
    }

    if (await Patient.exists({ email })) {
        return { errors: 'Email already exists' }
    }

    const hashedPassword = await hashPassword(password)
    const user = await Patient.create({ fname, lname, username, email, password: hashedPassword })

    await signIn('credentials', {
        email: user.email,
        role: user.role,
        redirectTo: '/'
    })
}
