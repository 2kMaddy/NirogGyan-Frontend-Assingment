import mongoose, { Schema } from "mongoose";

const slotSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  schedule_booked: {
    type: [String],
  },
});

const doctorSchema = new mongoose.Schema({
  doctor_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  availability_status: {
    type: String,
    required: true,
    enum: ["Available", "Fully Booked", "On Leave"],
  },
  qualification_details: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  practice_from: {
    type: Date,
    required: true,
  },
  consultation_fees: {
    type: Number,
    required: true,
  },
  language_spoken: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  slotsBooked: [slotSchema],
});

export default mongoose.model("Doctor", doctorSchema);
