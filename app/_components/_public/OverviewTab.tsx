"use client";
import { client } from "@/sanity/lib/client";
import { LessonGoadQuery } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";

interface OverviewTabProps {
  lessonId: string; // Replace with proper type
}

interface LessonGoal {
  goal: string;
}

export default function OverviewTab({ lessonId }: OverviewTabProps) {
  const [lessonGoals, setLessonGoals] = useState<LessonGoal[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLessonGoals = async () => {
    setLoading(true);
    try {
      if (!lessonId) return;
      const lessonGoals = await client.fetch(LessonGoadQuery(lessonId));
      console.log("lessonGoals", lessonGoals);
      setLessonGoals(lessonGoals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching lesson goals:", error);
    }
  };

  useEffect(() => {
    fetchLessonGoals();
  }, [lessonId]);

  return (
    <div className="space-y-4 text-slate-500">
      <h2 className="text-xl font-semibold">
        By the end of this lesson , the learner should be able to :
      </h2>
      {loading && (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      <ul className="flex flex-col gap-3">
        {lessonGoals.map((goal: any, index:number) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>{goal.goal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
