import mongoose, { Schema } from "mongoose";

const PatientSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    gender: { type: String},
    phone: { type: String },
    address: { type: String },
    allotedDoctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    medicalHistory: { type: String },
    currentMedications: { type: String },
    allergies: { type: String },
    emergencyContact: { type: String },
})

const Patient = mongoose.models.Patient || mongoose.model("Patient", PatientSchema)
export default Patient