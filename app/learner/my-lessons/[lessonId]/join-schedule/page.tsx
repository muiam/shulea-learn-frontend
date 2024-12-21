"use client";
import StartMeeting from "@/app/_components/_private/CallsComponent";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { avatar, Button, Spinner, user } from "@nextui-org/react";
import Link from "next/link";
import { generateJwtToken, getUserSchedule } from "@/utils/generateJwtToken";
function JoinSchedule() {
  const router = useRouter();
  const { user, isLoaded } = useUser(); // `isLoaded` is used to check if the user has been fetched
  const [loading, setLoading] = useState(true); // Local state to handle loading
  // We wait until `user` is loaded before making any decisions
  const [jwtToken, setJwtToken] = useState<string>("");
  useEffect(() => {
    const fetchUserSchedule = async () => {
      if (isLoaded && !user) {
        router.push("/sign-in");
      } else if (isLoaded && user && room) {
        try {
          const isOwner = await getUserSchedule(user.id, room);
          if (isOwner !== null) {
            const token = await generateToken({
              isOwner,
              user,
              kid: "vpaas-magic-cookie-4e3ae730260d4656853da83e61a003a9/6ed90d",
              appId: process.env.NEXT_PUBLIC_JITSI_APP_ID!,
            });

            if (token) {
              setJwtToken(token);
            }
          }
        } catch (error) {
          console.error("Error fetching schedule details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserSchedule();
  }, [user, isLoaded, router]);

  //make an api request to the server to get the token
  const generateToken = async ({
    user,
    kid,
    appId,
    isOwner,
  }: {
    user: any;
    kid: string;
    appId: any;
    isOwner: boolean;
  }) => {
    setLoading(true);
    const response = await fetch("/api/generateToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        name: user.firstName,
        email: user.email,
        avatar: user.imageUrl,
        appId: appId,
        kid: kid,
        isOwner: isOwner,
      }),
    });
    const data = await response.json();
    setLoading(false);
    return data.token;
  };
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
        <StartMeeting uuid={room} jwtToken={jwtToken} />
      </div>
    );
  }
}

export default JoinSchedule;
