import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  subtitle: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  modules: {
    required: true,
    type: [Schema.Types.ObjectId],
  },
  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  instructor: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  testimonials: {
    required: true,
    type: [Schema.Types.ObjectId],
  },
  quizSet: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  learning: {
    required: true,
    type: [String],
  },
  createdOn: {
    required: true,
    type: Date,
  },
  modifiedOn: {
    required: true,
    type: Date,
  },
});

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);
