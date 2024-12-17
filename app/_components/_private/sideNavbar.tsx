"use client";
import Image from "next/image";
import {
  Book,
  GraduationCap,
  LayoutIcon,
  Plus,
  Settings,
} from "lucide-react";
import { useDisclosure } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { Button as NextUiButton } from "@nextui-org/button";
import Link from "next/link";
import CreateLessonModal from "@/app/(modals)/CreateLessonModal";
import { useUser } from "@clerk/nextjs";
function SideNavbar() {
  const user = useUser()
  const path = usePathname();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const MenuList = [
    { id: 1, name: "Dashboard", icon: LayoutIcon, path: "/learner/dashboard" },
    { id: 2, name: "My Lessons", icon: GraduationCap, path: "/learner/my-lessons" },
    { id: 3, name: "My Posts", icon: Book, path: "/learner/questions-posted" },
    { id: 4, name: "Settings", icon: Settings, path: "/learner/settings" },
  ];


  return (
    <div className="shadow-md h-screen p-2">
      <div className="flex justify-center mb-3">
        <Image src="/logo.svg" width={40} height={20} alt="shulea logo" />
      </div>
        <NextUiButton
          onClick={onOpen}
          className="w-full bg-primary text-slate-200 hover:bg-slate-200 hover:text-slate-500"
          size="md"
        >
          <Plus />
          Create
      </NextUiButton>
      
      <CreateLessonModal isOpen={isOpen} onOpenChange={onOpenChange} />

    
      

      <hr className="my-5" />

      <div className="flex flex-col gap-5">
        {MenuList.map(
          (menu, index) => (
            <Link key={index} href={menu.path}>
              <h2
                className={`flex justify-start items-center gap-3
              text-md p-4 text-slate-500 hover:              
               hover:text-slate-500 rounded-lg  ${
                 path == menu.path && "bg-[pink] text-slate-200"
               } `}
              >
                <menu.icon />
                {menu.name}
              </h2>
            </Link>
          )
        )}
      </div>
      {user && (
        <div className="flex gap-2 text-center bottom-0 fixed p-2">
        <Image
          src={user.user?.imageUrl? user.user.imageUrl :"/user.jpeg" }
          width={35}
          height={35}
          alt="user"
          className="rounded-full"
        />
        <div>
            <h2 className="text-sm font-bold">{user.user?.firstName} {user.user?.lastName }</h2>
            <h2 className="text-xs text-slate-400">{ user.user?.emailAddresses[0].emailAddress }</h2>
        </div>
      </div>
        
    )}
      
    </div>
  );
}

export default SideNavbar;
