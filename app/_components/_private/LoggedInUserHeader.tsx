"use client";

import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Switch } from "@nextui-org/react";
import useSidebarStore from "@/utils/useSideBarOpensStore";

const LoggedInUserHeader: React.FC = () => {
  const { user } = useUser();
  const { toggleSidebar, isSidebarOpen } = useSidebarStore(); // Accessing the Zustand store
  return (
    <div className="flex justify-between md:justify-end items-center w-full p-4 shadow-sm border">
      <Switch
        className="text-slate-500 md:hidden"
        isSelected={isSidebarOpen}
        onValueChange={toggleSidebar}
        size="md">
        {isSidebarOpen ? "Close menu" : "Open menu"}
      </Switch>
      <div className="flex gap-5 items-center">
        {user?.imageUrl && <UserButton />}
      </div>
    </div>
  );

  // ... existing code ...
};

export default LoggedInUserHeader;
