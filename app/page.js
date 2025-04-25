import Text from "@/components/Text";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses = await getCourses();

  console.log(courses); // See all data
  console.log(courses[0]?.instructor?.socialMedia); // ✅ Correct access
  console.log(courses[1]?.testimonials); // ✅ Correct access

  return <Text />;
}
