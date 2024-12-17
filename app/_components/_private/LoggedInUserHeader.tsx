"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function LoggedInUserHeader() {
  const { user } = useUser(); 
  return (
    <div className="p-4 shadow-sm border flex justify-end">
      <div></div>
      <div className="flex gap-4">
        {user?.imageUrl && (
          <UserButton />
        )}
      </div>
    </div>
  );
}

export default LoggedInUserHeader;
