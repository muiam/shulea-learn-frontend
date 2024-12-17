import React from "react";
import { Button } from "@nextui-org/react";
import { LayoutDashboard, Pencil, Users2Icon } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { lessonSchedulesQuery } from "@/sanity/lib/queries";
import ScheduleButtons from "./ScheduleButtons";

export default async function ScheduleComponent({
  lessonId,
}: {
  lessonId: string;
}) {
  const schedules = await client.fetch(lessonSchedulesQuery(lessonId));

  return (
    <div>
      {schedules.map((schedule: any, index: number) => (
        <div key={index} className="flex flex-col gap-3 text-slate-500">
          <div className="flex flex-col gap-3 w-3/4">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold">{schedule.topic}</h2>
              <h2>
                Shall happen on {schedule.date} - {schedule.dayName} @{" "}
                {schedule.startTime} - {schedule.endTime}
              </h2>
            </div>
            <p>{schedule.description}</p>
          </div>
          <div className="flex  md:w-full gap-3 mb-10 items-center">
            {/* buttons take the schedule id as arguments */}
            <ScheduleButtons scheduleId={schedule._id} lessonId={lessonId} />
            <h2 className="flex items-center gap-2">
              <Users2Icon /> {schedule.totalEnrolled} Enrolled
            </h2>
          </div>
        </div>
      ))}{" "}
      {schedules.length == 0 && (
        <p className="text-center text-slate-500">No schedules found</p>
      )}
    </div>
  );
}
