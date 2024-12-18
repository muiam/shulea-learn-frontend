"use client";

import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Switch } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import useUserRoleStore from "@/utils/userRoleStore";

const LoggedInUserHeader: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const { role, toggleRole, initializeRole, isInitialized } =
    useUserRoleStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initializeRole();
    setMounted(true);
  }, [initializeRole]);

  const handleSwitchChange = () => {
    toggleRole();
    router.push("/learner/dashboard");
  };

  // Don't render the switch until client-side hydration is complete
  if (!mounted || !isInitialized) {
    return (
      <div className="p-4 shadow-sm border flex justify-end">
        <div className="flex gap-5 items-center">
          {user?.imageUrl && <UserButton />}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 shadow-sm border flex justify-end">
      <div className="flex gap-5 items-center">
        <Switch
          className="text-slate-500"
          isSelected={role === "tutor"}
          onValueChange={handleSwitchChange}
          size="md">
          {role === "learner" ? "Learner" : "Tutor"}
        </Switch>
        {user?.imageUrl && <UserButton />}
      </div>
    </div>
  );
};

export default LoggedInUserHeader;
