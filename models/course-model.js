import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  modules: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Module", // optional: if you have a Module model
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category", // optional
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Instructor", // optional
  },
  testimonials: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Testimonial", // optional
  },
  quizSet: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "QuizSet", // optional
  },
  learning: {
    type: [String],
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
  modifiedOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// // Optional: Middleware to update `modifiedOn` on save
// courseSchema.pre("save", function (next) {
//   this.modifiedOn = new Date();
//   next();
// });

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);
