import {Course} from "@/model/course-model"
import { Category } from "@/model/category-model";



export async function getCourses() {
  const courses = await Course.find({}).populate({
    path: "category",
    model: Category,
  });
    return courses
}
