import {Course} from "@/model/course-model"
import { Category } from "@/model/category-model";
import { User } from "@/model/user-model";



export async function getCourses() {
  const courses = await Course.find({})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    });
    return courses
}
