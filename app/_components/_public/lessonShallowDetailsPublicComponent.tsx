"use client";
import Link from "next/link";
import { CircleArrowRight, Share, Users2Icon, Star } from "lucide-react";
import { Button } from "@nextui-org/react";
import React from "react";
import { useDisclosure } from "@nextui-org/react";
import ShareComponent from "../_private/ShareComponent";
import Image from "next/image";

function LessonShallowDetailsPublicComponent({ lesson }: { lesson: any }) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const participants = lesson.participants || [];
  const displayedParticipants = participants.slice(0, 5);
  const remainingParticipants =
    participants.length - displayedParticipants.length;

  return (
    <div className="space-y-4">
      {/* Price and Rating Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            Kes {lesson.price || 0}
          </span>
          <span className="text-sm text-gray-500 line-through">
            Kes {((lesson.price || 0) * 1.2).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">4.8</span>
        </div>
      </div>

      {/* Enrollment and Share Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users2Icon className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-600">
            {lesson.totalEnrolled} Enrolled
          </span>
        </div>
        <Button
          variant="light"
          onClick={onOpen}
          className="text-gray-600 hover:text-primary">
          <Share className="w-5 h-5" />
        </Button>
      </div>

      {/* Participants Preview */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {displayedParticipants.map((participant: any, index: number) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <Image
                src={participant.learner?.imageUrl || "/user.jpeg"}
                alt={`participant-${index}`}
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        {remainingParticipants > 0 && (
          <span className="text-sm text-gray-500">
            +{remainingParticipants} more attending
          </span>
        )}
      </div>

      {/* Action Button */}
      <Link href={`/lessons/${lesson.slug.current}-${lesson._id}`}>
        <Button
          color="primary"
          className="w-full"
          endContent={<CircleArrowRight className="w-5 h-5" />}>
          View Details
        </Button>
      </Link>

      <ShareComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onOpen={onOpen}
        lessonTitle={lesson.title}
        lessonLink={`${process.env.NEXT_PUBLIC_APP_URL}/lessons/${lesson.slug.current}-${lesson._id}`}
      />
    </div>
  );
}

export default LessonShallowDetailsPublicComponent;
