import { formatPrice } from "@/lib/formatPrice";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import CourseDetails from "./_components/CourseDetails";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import ThemeToggle from "@/components/ThemeToggle";
// const courses = [
//   {
//     id: 1,
//     title: "Design",
//     thumbnail: "/assets/images/categories/design.jpg",
//   },

//   {
//     id: 3,
//     title: "Development",
//     thumbnail: "/assets/images/categories/development.jpg",
//   },
//   {
//     id: 4,
//     title: "Marketing",
//     thumbnail: "/assets/images/categories/marketing.jpg",
//   },
//   {
//     id: 5,
//     title: "IT & Software",
//     thumbnail: "/assets/images/categories/it_software.jpg",
//   },
//   {
//     id: 6,
//     title: "Personal Development",
//     thumbnail: "/assets/images/categories/personal_development.jpg",
//   },
//   {
//     id: 7,
//     title: "Business",
//     thumbnail: "/assets/images/categories/business.jpg",
//   },
//   {
//     id: 8,
//     title: "Photography",
//     thumbnail: "/assets/images/categories/photography.jpg",
//   },
//   {
//     id: 9,
//     title: "Music",
//     thumbnail: "/assets/images/categories/music.jpg",
//   },
// ];
const SingleCoursePage = () => {
  return (
    <>
    <ThemeToggle/>
      <CourseDetailsIntro />

      <CourseDetails />

      <Testimonials />

      <RelatedCourses />
    </>
  );
};
export default SingleCoursePage;
