import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
import { Lesson } from "@/model/lesson.model";

export async function getLesson(lessonId) {
  const lesson = await Lesson.findById(lessonId).lean();
  return replaceMongoIdInObject(lesson);
}
