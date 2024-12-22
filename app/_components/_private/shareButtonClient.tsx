"use client";
import { useDisclosure } from "@nextui-org/react";
import { Share2 } from "lucide-react";
import React from "react";
import ShareComponent from "./ShareComponent";

function ShareButtonClient({ Lesson }: { Lesson: any }) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <div>
      <button
        onClick={onOpen}
        className="w-full py-3 px-6 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
        <Share2 className="w-4 h-4" />
        Share this lesson
      </button>
      <ShareComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onOpen={onOpen}
        lessonTitle={Lesson.title}
        lessonLink={`${process.env.NEXT_PUBLIC_APP_URL}/lessons/${Lesson._id}`}
      />
    </div>
  );
}

export default ShareButtonClient;
