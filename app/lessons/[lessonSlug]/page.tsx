import Header from "@/app/_components/_public/Header";
import { client } from "@/sanity/lib/client";
import { singleLessonDetailsQuery } from "@/sanity/lib/queries";
import { BookOpen, GraduationCap, Star, Users } from "lucide-react";
import Image from "next/image";
import SingleLessonPublicDetailsComponent from "@/app/_components/_private/SingleLessonPublicDetailsComponent";
import ShareButtonClient from "@/app/_components/_private/shareButtonClient";
import SingleLessonTabs from "@/app/_components/_public/Tabs";

export default async function LessonDetailsPage({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = await params;
  const lessonId = lessonSlug.split("-").pop() ?? "";
  const lessonData = await client.fetch(singleLessonDetailsQuery(lessonId));
  const lesson = lessonData[0];
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Course Header */}
                <div className="relative h-64 md:h-80">
                  <Image
                    src={lesson.imageUrl || "/numbers.jpg"}
                    alt={lesson.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                      {lesson.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" fill="currentColor" />
                        4.8 (128 reviews)
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {lesson.totalEnrolled} students
                      </span>
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <SingleLessonPublicDetailsComponent lesson={lesson} />
                  {/* Tabs Navigation */}
                  <SingleLessonTabs />
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-6 space-y-6">
                {lesson.chargePerLesson ? (
                  <div className="bg-white rounded-2xl shadow-sm p-6">
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl font-bold">
                        KES {lesson.price || 0}
                      </span>
                      <span className="text-gray-500 line-through">
                        KES {(lesson.price * 1.2).toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full py-3 px-6 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors mb-4">
                      Enroll Now
                    </button>
                    <ShareButtonClient Lesson={lesson} />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-slate-500">
                      *** Charged per schedule ***
                    </h2>
                    <ShareButtonClient Lesson={lesson} />
                  </div>
                )}

                {/* Instructor Card */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">With</h2>
                  <div className="flex items-start gap-4">
                    <Image
                      src="/user.jpeg"
                      alt="Instructor"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">Peterson Smith</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Mathematics Expert
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          4.9
                        </span>
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          2.3k learner
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          12+ lessons
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
