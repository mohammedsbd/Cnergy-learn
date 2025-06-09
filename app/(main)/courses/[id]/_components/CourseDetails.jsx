import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import CourseOverview from "./CourseOverview";
// import CourseCurriculam from "./CourseCurriculam";
// import CourseInstructor from "./CourseInstructor";

const CourseDetails = () => {
  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="container">
        <span className="bg-green-500 px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
          Development
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
          Reactive Accelerator
        </h3>
        <p className="mt-3 text-gray-600 text-sm">Master React JS & Next JS</p>
        {/*  */}
        <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
          <div className="flex items-center gap-2">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src="https://avatars.githubusercontent.com/u/47516621?v=4"
              alt="Ariyan"
            />
            <p className="font-bold">Kazi Ariyan</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-success font-semibold">Last Updated: </span>
            <span>Feb 22, 2022</span>
          </div>
        </div>

        {/* Tab */}
        <div className="my-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Carriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
            </TabsList>

            <TabsContent value="overview">
              {/* each tab content can be independent component */}
              {/* <CourseOverview /> */}
            </TabsContent>

            <TabsContent value="curriculum">
              {/* each tab content can be independent component */}
{/* 
              <CourseCurriculam /> */}
            </TabsContent>
            <TabsContent value="instructor">
              {/* each tab content can be independent component */}
              {/* <CourseInstructor /> */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
