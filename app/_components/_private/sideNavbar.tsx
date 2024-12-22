"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Book, GraduationCap, LayoutIcon, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button as NextUiButton } from "@nextui-org/button";
import Link from "next/link";
import CreateLessonModal from "@/app/(modals)/CreateLessonModal";
import { UserButton, useUser } from "@clerk/nextjs";
import useUserRoleStore from "@/utils/userRoleStore";
import useSidebarStore from "@/utils/useSideBarOpensStore"; // Import the sidebar store
import { Spinner, Switch, useDisclosure } from "@nextui-org/react";

function SideNavbar() {
  const user = useUser();
  const path = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isSidebarOpen, toggleSidebar } = useSidebarStore(); // Accessing the Zustand store
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { role, toggleRole, initializeRole, isInitialized } =
    useUserRoleStore();
  // Menu items for learner and tutor
  const learnerMenuList = [
    { id: 1, name: "Dashboard", icon: LayoutIcon, path: "/learner/dashboard" },
    {
      id: 2,
      name: "My Lessons",
      icon: GraduationCap,
      path: "/learner/my-lessons",
    },
  ];

  const tutorMenuList = [
    { id: 1, name: "Dashboard", icon: LayoutIcon, path: "/learner/dashboard" },
    {
      id: 2,
      name: "My Lessons",
      icon: GraduationCap,
      path: "/learner/my-lessons",
    },
    { id: 3, name: "My Posts", icon: Book, path: "/tutor/questions-posted" },
    { id: 4, name: "Settings", icon: Settings, path: "/tutor/settings" },
  ];

  // Select the appropriate menu based on the role
  const MenuList = role === "learner" ? learnerMenuList : tutorMenuList;

  // Close the sidebar when a menu item is clicked
  const handleMenuItemClick = (path: string) => {
    toggleSidebar(); // Close the sidebar
    router.push(path); // Navigate to the new path
  };

  useEffect(() => {
    initializeRole();
    setMounted(true);
  }, [initializeRole]);

  const handleSwitchChange = () => {
    toggleRole();
    router.replace("/learner/dashboard");
  };

  if (!mounted || !isInitialized) {
    return (
      <div className="p-4 shadow-sm border flex justify-end">
        <Spinner color="white" size="md" />
      </div>
    );
  }

  return (
    <div>
      {/* Sidebar for larger devices */}
      <div
        className={`w-64 z-50 md:z-0 fixed rounded-tr-md md:rounded-tr-none md:mt-0 left-0 h-full mt-20  bg-white shadow-md p-4 transition-transform duration-300 border-t-2 md:border-t-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex justify-center mb-3">
          <Image src="/logo.svg" width={40} height={20} alt="shulea logo" />
        </div>

        {role === "tutor" && (
          <NextUiButton
            onClick={onOpen}
            className="w-full bg-primary text-slate-200 hover:bg-slate-200 hover:text-slate-500"
            size="md">
            <Plus />
            Create
          </NextUiButton>
        )}

        <CreateLessonModal isOpen={isOpen} onOpenChange={onOpenChange} />

        <hr className="my-5" />

        <div className="flex flex-col gap-5">
          {MenuList.map((menu, index) => (
            <Link key={index} href={menu.path} passHref>
              <h2
                onClick={() => handleMenuItemClick(menu.path)} // Trigger the sidebar close on click
                className={`flex justify-start items-center hover:bg-[pink] gap-3 text-md p-4 text-slate-500 hover:text-slate-500 rounded-lg ${
                  path == menu.path && "bg-[pink] text-slate-200"
                }`}>
                <menu.icon />
                {menu.name}
              </h2>
            </Link>
          ))}
          <div className="p-4">
            <Switch
              className="text-slate-500"
              isSelected={role === "tutor"}
              onValueChange={handleSwitchChange}
              size="md">
              {role === "learner" ? "Learner" : "Tutor"}
            </Switch>
          </div>
        </div>

        {user && (
          <div className="hidden md:flex gap-2 text-center bottom-0 fixed p-2">
            <Image
              src={user.user?.imageUrl ? user.user.imageUrl : "/user.jpeg"}
              width={35}
              height={35}
              alt="user"
              className="rounded-full"
            />
            <div>
              <h2 className="text-sm font-bold">
                {user.user?.firstName} {user.user?.lastName}
              </h2>
              <h2 className="text-xs text-slate-400">
                {user.user?.emailAddresses[0].emailAddress}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNavbar;
