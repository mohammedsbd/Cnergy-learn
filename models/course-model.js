import mongoose, { schema } from "mongoose";
import { boolean, Schema, string } from "zod";

const courseSchema = new mongoose.Schema({
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
    type: Schema.ObjectId,
  },
  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },
  category: {
    required: true,
    type: Schema.ObjectId,
  },
  instructor: {
    required: true,
    type: Schema.ObjectId,
  },

  testimonials: {
    required: true,
    type: Schema.ObjectId,
  },

  quizSet: {
    required: true,
    type: Schema.ObjectId,
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

export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);