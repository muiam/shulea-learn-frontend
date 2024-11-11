"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Book,
  GraduationCap,
  LayoutIcon,
  Mail,
  Plus,
  Settings,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Button as NextUiButton } from "@nextui-org/button";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/utils/Auth";
import { user } from "@nextui-org/theme";

function SideNavbar() {
  const router = useRouter();
  const [userType, setUserType] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token, redirect to login
      router.push("/login");
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token); // Ensure to replace 'any' with your actual type if you have it
      const type = decoded.type; // Adjust based on your token structure
      const exp = decoded.exp;
      if (exp * 1000 <= Date.now()) {
        router.push("/login");
      } else {
        if (type === "Learner") {
          setUserType("Learner");
        } else if (type === "Tutor") {
          setUserType("Tutor");
        } else {
          router.push("/login"); // Invalid user type, redirect to login
        }
      }
    } catch (error) {
      console.error("Token validation error:", error);
      router.push("/login"); // Invalid token or expired
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const learnerMenuList = [
    { id: 1, name: "Dashboard", icon: LayoutIcon, path: "/learner/dashboard" },
    { id: 2, name: "Enroll", icon: GraduationCap, path: "/learner/enroll" },
    { id: 3, name: "My Posts", icon: Book, path: "/learner/questions-posted" },
    { id: 4, name: "Settings", icon: Settings, path: "/learner/settings" },
  ];

  const tutorMenuList = [
    { id: 1, name: "Dashboard", icon: LayoutIcon, path: "/tutor/dashboard" },
    { id: 2, name: "My Lessons", icon: Book, path: "/tutor/lessons" },
    { id: 3, name: "Posts", icon: LayoutIcon, path: "/tutor/posts-list" },
    { id: 4, name: "Wallet", icon: Wallet, path: "/tutor/wallet" },
    { id: 5, name: "Mailer", icon: Mail, path: "/tutor/mail" },
    // Add additional tutor menu items here
  ];

  return (
    <div className="shadow-md h-screen p-2">
      <div className="flex justify-center mb-3">
        <Image src="/logo.svg" width={40} height={20} alt="shulea logo" />
      </div>
      {userType == "Learner" && (
        <NextUiButton
          onClick={() => router.push("/learner/post")}
          className="w-full bg-primary text-slate-200 hover:bg-slate-200 hover:text-slate-500"
          size="md"
        >
          <Plus />
          Ask
        </NextUiButton>
      )}

      {userType == "Tutor" && (
        <NextUiButton
          onClick={() => router.push("/learner/post")}
          className="w-full bg-primary text-slate-200 hover:bg-slate-200 hover:text-slate-500"
          size="md"
        >
          <Plus />
          Create
        </NextUiButton>
      )}

      <hr className="my-5" />

      <div className="flex flex-col gap-5">
        {(userType === "Learner" ? learnerMenuList : tutorMenuList).map(
          (menu, index) => (
            <Link key={index} href={menu.path}>
              <h2
                className={`flex justify-start items-center gap-3 
              text-md p-4 text-slate-500 hover:bg-primary
               hover:text-white rounded-lg  ${
                 path == menu.path && "bg-primary text-white"
               } `}
              >
                <menu.icon />
                {menu.name}
              </h2>
            </Link>
          )
        )}
      </div>

      <div className="flex gap-2 text-center bottom-0 fixed p-2">
        <Image
          src="/user.jpeg"
          width={35}
          height={35}
          alt="user"
          className="rounded-full"
        />
        <div>
          <h2 className="text-sm font-bold">Harrison Muia</h2>
          <h2 className="text-xs text-slate-400">mwendwaharry01@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
