// import mongoose, { Schema } from "mongoose";

// const moduleSchema = new Schema({
//   title: {
//     required: true,
//     type: String,
//   },
//   description: {
//     required: true,
//     type: String,
//   },
//   status: {
//     required: true,
//     type: String,
//   },
//   slug: {
//     required: true,
//     type: String,
//   },
//   course: {
//     required: true,
//     type: String,
//   },
//   lessonIds: {
//     required: true,
//     type: [String],
//   },
// });
// export const Module =
//   mongoose.models.Module ?? mongoose.model("Module", moduleSchema);
import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
  slug: {
    required: true,
    type: String,
  },
  course: {
    required: true,
    type: String,
  },
  lessonIds: {
    required: true,
    type: [String],
  },
  duration: {
    type: Number, // Duration in minutes
    default: 0,
  },
  type: {
    type: String,
    enum: ["live", "recorded"],
    default: "recorded",
  },
});

export const Module =
  mongoose.models.Module ?? mongoose.model("Module", moduleSchema);
