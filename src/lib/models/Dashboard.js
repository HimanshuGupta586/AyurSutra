// Appointment Schema
import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  doctor: {
    name: String,
    specialty: String,
    experience: String,
    rating: Number,
    location: String,
    consultationFee: String,
    image: String,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  date: Date,
  type: String, // Consultation, Follow-up, etc.
  status: { type: String, default: 'scheduled' },
});

// Health Metric Schema
const HealthMetricSchema = new mongoose.Schema({
  label: String,
  value: mongoose.Schema.Types.Mixed, // string or number
  status: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
});

// Medicine/Pharmacy Product Schema
const ProductSchema = new mongoose.Schema({
  name: String,
  dosage: String,
  status: String, // active, completed
  category: String,
  price: Number,
  originalPrice: Number,
  rating: Number,
  reviews: Number,
  image: String,
  description: String,
  inStock: Boolean,
  prescription: Boolean,
});

// Consultation/Chat Schema
const ChatMessageSchema = new mongoose.Schema({
  sender: { type: String, enum: ['doctor', 'patient'] },
  message: String,
  time: String,
});

const ConsultationSchema = new mongoose.Schema({
  doctor: {
    name: String,
    specialty: String,
    status: String,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  lastMessage: String,
  time: String,
  unread: Number,
  chatMessages: [ChatMessageSchema],
});

// Progress Tracking Schema
const HealthScoreSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  date: String,
  score: Number,
});

const DoshaBalanceSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  name: String,
  value: Number,
  color: String,
});

const SymptomTrackingSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  symptom: String,
  week1: Number,
  week6: Number,
});

const VitalMetricSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  label: String,
  value: Number,
  target: Number,
  trend: String,
});

module.exports = {
  Appointment: mongoose.model('Appointment', AppointmentSchema),
  HealthMetric: mongoose.model('HealthMetric', HealthMetricSchema),
  Product: mongoose.model('Product', ProductSchema),
  Consultation: mongoose.model('Consultation', ConsultationSchema),
  HealthScore: mongoose.model('HealthScore', HealthScoreSchema),
  DoshaBalance: mongoose.model('DoshaBalance', DoshaBalanceSchema),
  SymptomTracking: mongoose.model('SymptomTracking', SymptomTrackingSchema),
  VitalMetric: mongoose.model('VitalMetric', VitalMetricSchema),
};
