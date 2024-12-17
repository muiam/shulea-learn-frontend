"use client";
import Link from "next/link";
import { CircleArrowRight, Share, Users2Icon } from "lucide-react";
import { Button } from "@nextui-org/react";
import React from "react";
import UploadAvatarClient from "@/app/(modals)/UploadAvatarClient";
import { useDisclosure } from "@nextui-org/react";
import ShareComponent from "./ShareComponent";

function LessonShallowDetailsComponent({ lesson }: { lesson: any }) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <span>Kes {lesson.price || 0}</span>
          <span className="flex gap-2">
            <Users2Icon /> {lesson.totalEnrolled} Enrolled
          </span>
          <Button variant="light" onClick={onOpen}>
            <Share />
          </Button>
          <ShareComponent
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            onOpen={onOpen}
            lessonTitle={lesson.title}
            lessonLink={`${process.env.NEXT_PUBLIC_APP_URL}/lessons/${lesson.slug.current}/${lesson._id}`}
          />
        </div>
        <div className="flex gap-2">
          <Link href={`/learner/my-lessons/${lesson._id}`}>
            <Button color="primary">
              <CircleArrowRight />
              Panel
            </Button>
          </Link>
          <UploadAvatarClient lessonID={lesson._id} />
        </div>
      </div>
    </div>
  );
}

export default LessonShallowDetailsComponent;
