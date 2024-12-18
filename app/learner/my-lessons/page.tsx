import React from "react";
import AuthLayout from "../AuthLayout";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { IndentIncrease, CalendarClock, CircleHelp } from "lucide-react";
import { myLessonsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import LessonShallowDetailsComponent from "@/app/_components/_private/LessonShallowDetailsComponent";
async function MyLessons() {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    redirect("/sign-in");
  }
  const myLessons = await client.fetch(myLessonsQuery(userId));
  return (
    <AuthLayout>
      <div className="text-slate-500 md:p-3 min-h-screen">
        <h1 className="text-2xl font-bold mb-5">My Lessons</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {/* display the lessons using cards in grid */}
          {myLessons.map((lesson: any) => (
            <Card key={lesson._id} className="w-full bg-transparent">
              <CardHeader>
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-bold">{lesson.title}</h2>
                  <div className="flex flex-row gap-2">
                    <span className="flex gap-2">
                      <IndentIncrease />
                      {lesson.subject}
                    </span>
                    <span className="flex gap-2">
                      <CircleHelp />
                      {lesson.chargePerLesson
                        ? "Charged per lesson"
                        : "Charged per schedule"}
                    </span>
                    <span className="flex gap-2">
                      <CalendarClock />
                      {lesson.MinimumNeeded} schedules needed
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex gap-4">
                  {/* make the lesson image width and height constant regardless of the image dimensions */}
                  <div className="w-[150px] h-[100px] bg-slate-500 rounded-lg">
                    {/* make the image take the whole div */}
                    <Image
                      src={lesson.imageUrl ? lesson.imageUrl : "/numbers.jpg"}
                      alt="lesson avatar"
                      width={150}
                      loading="lazy"
                      height={150}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <LessonShallowDetailsComponent lesson={lesson} />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}

export default MyLessons;
