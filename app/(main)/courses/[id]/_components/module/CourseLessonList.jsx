import React from 'react';
import { Tv } from "lucide-react";
import { cn } from "@/lib/utils";

const CourseLessonList = () => {
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
    What is React ?
    </div>
</button>
{/* item ends */}
{/* item */}
<button
    type="button"
    className={cn(
    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
    )}
>
    <div className="flex items-center gap-x-2">
    <Tv size={16} className={cn("text-slate-500")} />
    Learn React Basics
    </div>
</button>
            
        </div>
    );
};

export default CourseLessonList;