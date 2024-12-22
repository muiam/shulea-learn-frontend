import React from "react";
import Header from "../_components/_public/Header";
import {
  CalendarClock,
  IndentIncrease,
  CircleHelp,
  Search,
  Filter,
} from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";
import LessonShallowDetailsPublicComponent from "../_components/_public/lessonShallowDetailsPublicComponent";
import { client } from "@/sanity/lib/client";
import { allLessonsQuery } from "@/sanity/lib/queries";

export default async function LessonsPage() {
  const allLessons = await client.fetch(allLessonsQuery);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Discover Your Next Learning Adventure
            </h1>
            <p className="text-lg text-primary-100 mb-8">
              Explore our curated collection of expert-led lessons
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto flex gap-4">
              <Input
                placeholder="Search lessons..."
                startContent={<Search className="text-gray-400" />}
                className="bg-white"
              />
              <Button
                className="bg-white text-primary"
                startContent={<Filter className="w-4 h-4" />}>
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { label: "Active Lessons", value: allLessons.length },
            { label: "Total Students", value: "500+" },
            { label: "Expert Tutors", value: "50+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allLessons.map((lesson: any) => (
            <Card
              key={lesson._id}
              className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardHeader className="p-6">
                <div className="flex items-start gap-4">
                  {/* Lesson Image */}
                  <div className="w-[120px] h-[120px] flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={lesson.imageUrl || "/numbers.jpg"}
                      alt={lesson.title}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Lesson Header Info */}
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-2">{lesson.title}</h2>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <IndentIncrease className="w-4 h-4" />
                        {lesson.subject}
                      </span>
                      <span className="flex items-center gap-1">
                        <CircleHelp className="w-4 h-4" />
                        {lesson.chargePerLesson ? "Per lesson" : "Per schedule"}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarClock className="w-4 h-4" />
                        {lesson.minimumNeeded ||
                          1} schedules
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="border-t border-gray-100 p-6">
                <LessonShallowDetailsPublicComponent lesson={lesson} />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
