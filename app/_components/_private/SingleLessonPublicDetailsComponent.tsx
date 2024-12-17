"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { useDisclosure } from "@nextui-org/react";
import ShareComponent from "../_private/ShareComponent";
import Image from "next/image";
import { ShareIcon } from "lucide-react";

function SingleLessonPublicDetailsComponent({ lesson }: { lesson: any }) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  const participants = lesson.participants || [];
  const displayedParticipants = participants.slice(0, 10); // Show only the first 10 participants
  const remainingParticipants =
    participants.length - displayedParticipants.length;

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <span>Kes {lesson.price || 0}</span>
          <span className="flex gap-2">
            <span>{lesson.totalEnrolled} Enrolled</span>
          </span>
          <Button variant="light" onClick={onOpen}>
            <ShareIcon />
          </Button>
          <ShareComponent
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            onOpen={onOpen}
            lessonTitle={lesson.title}
            lessonLink={`${process.env.NEXT_PUBLIC_APP_URL}/lessons/${lesson.slug.current}-${lesson._id}`}
          />
        </div>

        {/* Display participant images in a flex row */}
        <div className="flex gap-2">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {displayedParticipants.map(
              (participant: any, index: number) => (
                console.log("participant url is", participant.learner.imageUrl),
                (
                  <Image
                    key={index}
                    src={
                      participant.learner.imageUrl
                        ? participant.learner.imageUrl
                        : "/user.jpeg"
                    }
                    alt={`participant-${index}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )
              )
            )}
          </div>
          {/* Show the number of remaining participants */}
          {remainingParticipants > 0 && (
            <div className="mt-2 text-gray-500">
              + {remainingParticipants} more attending
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleLessonPublicDetailsComponent;
