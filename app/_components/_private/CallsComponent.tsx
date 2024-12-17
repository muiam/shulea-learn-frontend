// StartLesson.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useUser } from "@clerk/nextjs";

export default function StartMeeting({ scheduleId }: { scheduleId: string }) {
  const meetingContainerRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const appID = Number(process.env.NEXT_PUBLIC_APP_ID); // Your Zego App ID
  const serverSecret = String(process.env.NEXT_PUBLIC_SERVER_SECRET); // Your Zego Server Secret

  // Generate Kit Token for joining the room
  const roomID = scheduleId; // Use the schedule ID as the room ID
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    scheduleId, // Random user ID for joining the room
    user?.id || "anonymous" + Date.now() // Another random user ID
  );

  const zp = ZegoUIKitPrebuilt.create(kitToken);

  // Check if the container is available
  if (meetingContainerRef.current) {
    zp.joinRoom({
      container: meetingContainerRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference, // You can change it to OneONoneCall if required
      },
    });
  }
  return (
    <div
      ref={meetingContainerRef}
      style={{ width: "100vw", height: "100vh" }}></div>
  );
}
