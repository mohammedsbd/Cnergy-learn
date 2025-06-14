import React from "react";
import { BookCheck, Clock10, Radio } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CourseModuleList from "./module/CourseModuleList";

const CourseCurriculam = ({ course }) => {
  const modules = Array.isArray(course?.modules) ? course.modules : [];
  const totalDuration = modules.reduce(
    (acc, obj) => acc + (obj?.duration || 0),
    0
  );
  const hours = totalDuration > 0 ? (totalDuration / 60).toFixed(1) : 0;

  return (
    <>
      <div className="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
        <span className="flex items-center gap-1.5">
          <BookCheck className="w-4 h-4" />
          {modules.length} Chapter{modules.length !== 1 ? "s" : ""}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock10 className="w-4 h-4" />
          {hours}+ Hours
        </span>
        <span className="flex items-center gap-1.5">
          <Radio className="w-4 h-4" />4 Live Classes
        </span>
      </div>

      <Accordion
        defaultValue={["item-1", "item-2", "item-3"]}
        type="multiple"
        collapsible="true"
        className="w-full"
      >
        {modules.length > 0 ? (
          modules.map((module, index) => (
            <CourseModuleList
              key={module?.id || `module-${index}`}
              module={module}
            />
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            No curriculum available yet
          </div>
        )}
      </Accordion>
    </>
  );
};

export default CourseCurriculam;
