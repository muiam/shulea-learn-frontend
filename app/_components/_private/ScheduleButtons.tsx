// ScheduleButtons.tsx
"use client";
import { Button } from "@nextui-org/button";
import { MicIcon, Pencil } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ScheduleButtons({
  lessonId,
  scheduleId,
}: {
  lessonId: string;
  scheduleId: string;
}) {
  return (
    <>
      <Button variant="light">
        <Pencil />
      </Button>
      <Link href={`${lessonId}/join-schedule?schedule=${scheduleId}`} passHref>
        <Button variant="light">
          <MicIcon />
          Start
        </Button>
      </Link>
    </>
  );
}
