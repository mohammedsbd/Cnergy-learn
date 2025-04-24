export async function getCourses() {
  const courses = await Course.find({})
  return courses
}
