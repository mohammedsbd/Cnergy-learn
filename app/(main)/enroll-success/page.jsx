import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { sendEmails } from "@/lib/emails";
import { stripe } from "@/lib/stripe";
import { getCourseDetails } from "@/queries/courses";
import { enrollForCourse } from "@/queries/enrollments";
import { getUserByEmail } from "@/queries/users";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const Success = async ({ searchParams : {session_id, courseId} }) => {

  if (!session_id) {
    throw new Error("Please provide a vaid session id that start with cs_")
  }

  const userSession = await auth();

  if (!userSession?.user?.email) {
    redirect("/login");
  } 

  const course = await getCourseDetails(courseId);
  const loggedInUser = await getUserByEmail(userSession?.user?.email);

  const checkoutSession = await stripe.checkout.sessions.retrieve(
    session_id,
    {
      expand: ["line_items" , "payment_intent"],
    }
  );

  // console.log(checkoutSession);
  const paymentIntent = checkoutSession?.payment_intent;
  const paymentStatus = paymentIntent?.status;

  /// Cutomer Info 
  const customerName = `${loggedInUser?.firstName} ${loggedInUser?.lastName
  }`;
  const customerEmail = loggedInUser?.email;
  const productName = course?.title;
  //console.log(customerName,customerEmail,productName);

  if (paymentStatus === "succeeded") {
    /// Update data to enrollment table 
    const enrolled = await enrollForCourse(
      course?.id,
      loggedInUser?.id,
      "stripe"
    );
    console.log(enrolled);

