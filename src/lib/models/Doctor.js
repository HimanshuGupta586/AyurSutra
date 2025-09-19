import mongoose, { Schema } from "mongoose";

const DoctorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    specialization: { type: String },
    phone: { type: String },
    experience: { type: Number },
    clinicAddress: { type: String },
    timings: { type: String },
    patients: [{ type: Schema.Types.ObjectId, ref: 'Patient' }],
    role: { type: String, default: 'doctor' },
})

const Doctor = mongoose.models?.Doctor || mongoose.model("Doctor", DoctorSchema)

export default Doctor