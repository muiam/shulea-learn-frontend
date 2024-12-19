import React from "react";
import Header from "../_components/_public/Header";
import { CalendarClock, IndentIncrease, CircleHelp } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import LessonShallowDetailsPublicComponent from "../_components/_public/lessonShallowDetailsPublicComponent";
import { client } from "@/sanity/lib/client";
import { allLessonsQuery } from "@/sanity/lib/queries";

export default async function lessonsPage() {
  const allLessons = await client.fetch(allLessonsQuery);
  return (
    <div>
      <Header />
      <div className="p-10 flex flex-col gap-3">
        <h2 className="text-slate-500 font-extrabold">Available lessons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {/* display the lessons using cards in grid */}
          {allLessons.map((lesson: any) => (
            <Card key={lesson._id} className="w-full bg-transparent">
              <CardHeader>
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-bold">{lesson.title}</h2>
                  <div className="flex flex-col md:flex-row gap-3">
                    <span className="flex gap-2">
                      <IndentIncrease />
                      {lesson.subject}
                    </span>
                    <div className="flex  gap-3">
                      <span className="flex gap-2">
                        <CircleHelp />
                        {lesson.chargePerLesson
                          ? "Charged per lesson"
                          : "Charged per schedule"}
                      </span>
                      <span className="flex gap-2">
                        <CalendarClock />
                        {lesson.minimumNeeded ? lesson.minimumNeeded : 1}{" "}
                        schedules required
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col md:flex-row gap-4">
                  {/* make the lesson image width and height constant regardless of the image dimensions */}
                  <div className="w-full md:w-[150px] md:h-[100px] h-[150px] bg-slate-500 rounded-lg">
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
                  <LessonShallowDetailsPublicComponent lesson={lesson} />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
