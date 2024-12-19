"use client";
import StartMeeting from "@/app/_components/_private/CallsComponent";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";

function JoinSchedule() {
  const router = useRouter();
  const { user, isLoaded } = useUser(); // `isLoaded` is used to check if the user has been fetched
  const [loading, setLoading] = useState(true); // Local state to handle loading
  // We wait until `user` is loaded before making any decisions
  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    } else if (isLoaded && user) {
      setLoading(false); // Set loading to false once user is loaded and authenticated
    }
  }, [user, isLoaded, router]);

  const searchParams = new URLSearchParams(window.location.search);
  const room = searchParams.get("schedule");

  if (loading) {
    return (
      <div className="justify-center text-cente ">
        <Spinner color="white" aria-label="wait a moment ... " />
      </div>
    );
  }

  if (!room) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Schedule not found</h1>
        <Link href="/learner/my-lessons">
          <Button>Go back to your lessons</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <StartMeeting scheduleId={room!} />
      </div>
    );
  }
}

export default JoinSchedule;
