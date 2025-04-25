import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema({
  content: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: Number,
  },
  
  courseId: { type: Schema.Types.ObjectId, ref: "Category" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Testimonial =
  mongoose.models.Testimonial ??
  mongoose.model("Testimonial", testimonialSchema);
