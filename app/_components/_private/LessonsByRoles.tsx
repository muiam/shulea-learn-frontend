"use client";
import { client } from "@/sanity/lib/client";
import { myLessonsQuery } from "@/sanity/lib/queries";
import useUserRoleStore from "@/utils/userRoleStore";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { BookOpen, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Lesson {
  title: string;
  description: string;
  subject: string;
  price: number;
  imageUrl: string;
  slug: string;
}

function LessonsByRoles() {
  const { role } = useUserRoleStore();
  const { user } = useUser();
  const [myCreatedLessons, setMyCreatedLessons] = useState<Lesson[]>([]);

  const fetchLessons = async () => {
    try {
      if (!user?.id) return;
      const lessons = await client.fetch(myLessonsQuery(user.id));
      setMyCreatedLessons(lessons);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, [user]);
  return (
    <div>
      {role === "learner" && (
        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Your Enrolled Lessons</h2>
            <Link
              href="/learner/lessons"
              className="flex items-center text-sm text-primary hover:underline">
              View all lessons
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Lesson Card 1 */}
            <div className="p-4 rounded-lg border border-slate-200 hover:border-primary transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-green-100">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">Advanced JavaScript Concepts</h3>
                  <p className="text-sm text-slate-500 mb-3">by Sarah Smith</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">
                      Progress: 60%
                    </span>
                    <Button color="primary" size="sm" variant="light">
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Card 2 */}
            <div className="p-4 rounded-lg border border-slate-200 hover:border-primary transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">UI/UX Design Fundamentals</h3>
                  <p className="text-sm text-slate-500 mb-3">by Mike Johnson</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">
                      Progress: 30%
                    </span>
                    <Button color="primary" size="sm" variant="light">
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {role === "tutor" && (
        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Your Created Lessons</h2>
            <Link
              href="/learner/lessons"
              className="flex items-center text-sm text-primary hover:underline">
              View all lessons
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myCreatedLessons.map((lesson: any) => (
              <div
                key={lesson._id}
                className="p-4 rounded-lg border border-slate-200 hover:border-primary transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-green-100">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{lesson.title}</h3>
                    <p className="text-sm text-slate-500 mb-3">by Me</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 flex gap-2 justify-center items-center">
                        <Users className="text-blue-800" />{" "}
                        {lesson.totalEnrolled} Enrolled
                      </span>
                      <Button color="primary" size="sm" variant="light">
                        panel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LessonsByRoles;
