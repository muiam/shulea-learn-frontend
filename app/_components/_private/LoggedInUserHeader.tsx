import React from "react";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import AuthCheck from "@/utils/AuthCheck";
import { Button } from "@nextui-org/button";

function LoggedInUserHeader() {
  AuthCheck();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <div className="p-4 shadow-sm border flex justify-end">
      <div></div>
      <div className="flex gap-4">
        <Button
          onClick={handleLogout}
          className="text-slate-200"
          color="primary"
        >
          <LogOutIcon />
          Logout
        </Button>

        <Image
          src={"/user.jpeg"}
          width={35}
          height={35}
          alt="user"
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default LoggedInUserHeader;
