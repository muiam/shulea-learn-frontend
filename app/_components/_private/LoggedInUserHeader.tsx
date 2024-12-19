"use client";

import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button, Switch } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import useUserRoleStore from "@/utils/userRoleStore";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import useSidebarStore from "@/utils/useSideBarOpensStore";

const LoggedInUserHeader: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const { role, toggleRole, initializeRole, isInitialized } =
    useUserRoleStore();
  const { toggleSidebar, isSidebarOpen } = useSidebarStore(); // Accessing the Zustand store

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initializeRole();
    setMounted(true);
  }, [initializeRole]);

  const handleSwitchChange = () => {
    toggleRole();
    router.push("/learner/dashboard");
  };

  if (!mounted || !isInitialized) {
    return (
      <div className="p-4 shadow-sm border flex justify-end">
        <div className="flex gap-5 items-center">
          {user?.imageUrl && <UserButton />}
        </div>
      </div>
    );
  }

  // ... existing code ...

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
        <Switch
          className="text-slate-500"
          isSelected={role === "tutor"}
          onValueChange={handleSwitchChange}
          size="md">
          {role === "learner" ? "Learner" : "Creator"}
        </Switch>
        {user?.imageUrl && <UserButton />}
      </div>
    </div>
  );

  // ... existing code ...
};

export default LoggedInUserHeader;
