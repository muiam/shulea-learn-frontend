import React from "react";
import Header from "../_components/_public/Header";
import { Button } from "@/components/ui/button";
import {
  Book,
  DollarSign,
  Dot,
  GraduationCap,
  LockOpen,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function lessonsPage() {
  return (
    <div>
      <Header />
      <div className="p-10 flex flex-col gap-3">
        <h2 className="text-slate-500 font-extrabold">Available lessons</h2>
        <div className="md:w-[450px]">
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-slate-500 ">
              Multiplication Bootcamp Every thursdays 11:00 am
            </h2>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 h-[100px] grid grid-cols-2 gap-3 justify-between items-center">
                <span className="text-slate-500 flex">
                  <Book />
                  Mathematics
                </span>
                <span className="text-slate-500 flex">
                  <LockOpen />
                  22 open seats
                </span>
                <span className="text-slate-500 flex gap-1">
                  <Users />
                  203 enrolled
                </span>
                <span className="text-slate-500 flex gap-1">
                  <Dot color="green" />
                  via shulea
                </span>
                <span className="text-slate-500 flex gap-1">
                  <DollarSign />
                  KES 2,000
                </span>
                <span className="text-slate-500 flex gap-1">
                  <DollarSign />
                  KES 2,000
                </span>
              </div>
              <div className="flex-2 h-[100px] flex flex-col gap-3 p-3 order-1">
                <Image
                  src={"/user.jpeg"}
                  alt="class owner image"
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <Link href={"/prof-details"} className="text-primary">
                  @Labib
                </Link>
              </div>
            </div>
            <div className="flex justify-end ">
              <Link
                href={
                  "/lessons/class-two-multiplication-bootcamp-with-assignments-for-practical/@peterson/34uyT11"
                }
              >
                <Button className="bg-primary">
                  <GraduationCap />
                  Enroll
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default lessonsPage;
