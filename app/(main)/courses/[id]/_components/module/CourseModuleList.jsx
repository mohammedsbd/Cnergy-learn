import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Radio } from "lucide-react";

import { Video } from "lucide-react";
import { NotepadText } from "lucide-react";
import { FileQuestion } from "lucide-react";
import CourseLessonList from "./CourseLessonList";

const CourseModuleList = ({ module }) => {
  // console.log(module);

  return (
    <div>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger>{module?.title}</AccordionTrigger>
        <AccordionContent>
          {/* header */}
          <div className="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1.5">
              <Video className="w-4 h-4" />
              {(module?.duration / 60).toPrecision(2)} Hours
            </span>
            <span className="flex items-center gap-1.5">
              <NotepadText className="w-4 h-4" />
              10 Notes
            </span>
            <span className="flex items-center gap-1.5">
              <FileQuestion className="w-4 h-4" />
              10 Quiz
            </span>
            <span className="flex items-center gap-1.5">
              <Radio className="w-4 h-4" />1 Live Class
            </span>
          </div>
          {/* header ends */}

          <div className="space-y-3">
            {module.lessonIds &&
              module?.lessonIds.map((lessonId) => (
                <CourseLessonList key={lessonId} lessonId={lessonId} />
              ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

export default CourseModuleList;
