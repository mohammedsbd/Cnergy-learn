import React from "react";
import { Tv } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLesson } from "@/queries/lessons";

const CourseLessonList = async ({ lessonId }) => {
  const lesson = await getLesson(lessonId);
  //console.log(lesson);

  return (
    <div>
      <button
        type="button"
        className={cn(
          "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
        )}
      >
        <div className="flex items-center gap-x-2">
          <Tv size={16} className={cn("text-slate-500")} />
          {lesson?.title}
        </div>
      </button>
    </div>
  );
};

export default CourseLessonList;
