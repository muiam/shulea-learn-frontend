"use client";
import { BookOpen, Clock, Target, Users } from "lucide-react";
import Image from "next/image";

function SingleLessonPublicDetailsComponent({ lesson }: { lesson: any }) {
  const participants = lesson.participants || [];
  const displayedParticipants = participants.slice(0, 5);
  const remainingParticipants =
    participants.length - displayedParticipants.length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Clock, label: "Duration", value: "2 hours" },
          { icon: Target, label: "Level", value: "Beginner" },
          {
            icon: BookOpen,
            label: "schedules",
            value: `${lesson.minimumNeeded || 1} required`,
          },
          { icon: Users, label: "Enrolled", value: lesson.totalEnrolled },
        ].map((stat, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-50">
            <div className="flex items-center gap-3 mb-2">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-gray-600">{stat.label}</span>
            </div>
            <p className="font-medium">{stat.value}</p>
          </div>
        ))}
      </div>
      <p className="font-bold text-slate-size-500">
        {lesson.chargePerLesson
          ? `***Charged per Lesson***`
          : `***This lesson is charged per schedule, scroll down and see schedules***`}
      </p>

      {/* Participants */}
      {participants.length > 0 && (
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {displayedParticipants.map((participant: any, index: number) => (
              <div
                key={index}
                className="relative w-8 h-8 rounded-full border-2 border-white">
                <Image
                  src={
                    participant &&
                    participant.learner &&
                    participant.learner.imageUrl
                      ? participant.learner.imageUrl
                      : "/user.jpeg"
                  }
                  alt={`participant-${index}`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            ))}
          </div>
          {remainingParticipants > 0 && (
            <span className="text-sm text-gray-600">
              +{remainingParticipants} more enrolled
            </span>
          )}
        </div>
      )}

      {/* Course Description */}
      <div className="prose prose-sm max-w-none">
        <h2 className="text-lg font-semibold mb-3">About this lesson</h2>
        <p className="text-gray-600 line-clamp-3">
          {lesson.description ||
            "Learn from experienced instructors in an interactive environment designed to help you master new skills effectively."}
        </p>
      </div>
    </div>
  );
}

export default SingleLessonPublicDetailsComponent;
