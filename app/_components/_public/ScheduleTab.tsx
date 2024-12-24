"use client";
import { client } from "@/sanity/lib/client";
import { lessonSchedulesQuery } from "@/sanity/lib/queries";
import { Calendar, Clock, Lock, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface ScheduleTabProps {
  lessonId: any; // Replace with proper type
}

interface LessonSchedule {
  chargePerLesson: boolean;
  topic: string;
  date: string;
  dayName: string;
  startTime: string;
  endTime: string;
  price: number;
  description: string;
  _id: string;
}

export default function ScheduleTab({ lessonId }: ScheduleTabProps) {
  const [lessonSchedules, setLessonSchedules] = useState<LessonSchedule[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSchedules = async () => {
    setLoading(true);
    try {
      if (!lessonId) return;
      const lessonSchedules = await client.fetch(
        lessonSchedulesQuery(lessonId)
      );

      setLessonSchedules(lessonSchedules);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching lesson schedules:", error);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, [lessonId]);

  return (
    <div className="space-y-4">
      {loading && (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      {lessonSchedules.map((lessonSchedule: any, index: number) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-colors">
          <div className="flex-grow space-y-3">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {lessonSchedule.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {lessonSchedule.startTime} - {lessonSchedule.endTime}
              </span>
              {!lessonSchedule.chargePerLesson && (
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {lessonSchedule.capacity} seats left
                </span>
              )}
            </div>
            <h3 className="font-medium text-gray-900">
              {lessonSchedule.topic}
            </h3>
            <p>{lessonSchedule.description}</p>
          </div>
          {lessonSchedule.chargePerLesson ? (
            <Lock className="w-6 h-6 text-primary" />
          ) : (
            <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
              Enroll
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
