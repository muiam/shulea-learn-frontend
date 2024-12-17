"use client";
import React, { useState } from "react";
import AuthLayout from "../(learnerAuthLayout)/learnerAuthLayout";
import AuthCheck from "@/utils/AuthCheck";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input, Spinner } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Book, Calendar, DollarSign, Dot, LockOpen, Users } from "lucide-react";
import { toast } from "sonner";

function learnerEnroll() {
  const [enrollmentCode, setEnrollmentCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const handleLessonDisplay = () => {
    if (enrollmentCode.length < 5) {
      toast("invalid enrollment code");
      setLoading(true);
      setShowCode(false);
    } else {
      setShowCode(true);
      setLoading(false);
    }
  };
  AuthCheck();
  return (
    <AuthLayout>
      <div className=" flex flex-col lg:flex-row">
        <div className="flex-1 p-3 scrollbar-default overflow-y-scroll">
          <Tabs defaultValue="Express" className="text-slate-500">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Express" className="text-slate-500">
                Express
              </TabsTrigger>
              <TabsTrigger value="ByCode" className="text-slate-500">
                By Code
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Express">
              <div className="flex-flex-col p-3 mt-10 gap-10 space-y-5">
                <div className="flex flex-col gap-3">
                  <h2 className="text-slate-500 ">
                    Multiplication Bootcamp Every thursdays 11:00 am
                    Multiplication Bootcamp Every thursdays 11:00
                    amMultiplication Bootcamp Every thursdays 11:00 am
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
                        <Calendar />
                        open schedule
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-slate-500 ">
                    Multiplication Bootcamp Every thursdays 11:00 am
                    Multiplication Bootcamp Every thursdays 11:00
                    amMultiplication Bootcamp Every thursdays 11:00 am
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
                        <Calendar />
                        open schedule
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-slate-500 ">
                    Multiplication Bootcamp Every thursdays 11:00 am
                    Multiplication Bootcamp Every thursdays 11:00
                    amMultiplication Bootcamp Every thursdays 11:00 am
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
                    <Button className="bg-primary">
                      <Calendar />
                      open schedule
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-slate-500 ">
                    Multiplication Bootcamp Every thursdays 11:00 am
                    Multiplication Bootcamp Every thursdays 11:00
                    amMultiplication Bootcamp Every thursdays 11:00 am
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
                    <Button className="bg-primary">
                      <Calendar />
                      open schedule
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-slate-500 ">
                    Multiplication Bootcamp Every thursdays 11:00 am
                    Multiplication Bootcamp Every thursdays 11:00
                    amMultiplication Bootcamp Every thursdays 11:00 am
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
                    <Button className="bg-primary">
                      <Calendar />
                      open schedule
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ByCode">
              <div className="flex flex-col mt-10 h-screen">
                <Input
                  onChange={(event) => {
                    setEnrollmentCode(event.target.value);
                  }}
                  type="text"
                  className="indent-10"
                  placeholder="Enter enrollment code"
                  onInput={handleLessonDisplay}
                />
                {loading && <Spinner label="Loading..." color="warning" />}
                <div className="mt-20" hidden={!showCode}>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-slate-500 ">
                      Multiplication Bootcamp Every thursdays 11:00 am
                      Multiplication Bootcamp Every thursdays 11:00
                      amMultiplication Bootcamp Every thursdays 11:00 am
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
                      <Button className="bg-primary">
                        <Calendar />
                        open schedule
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex-1 border-t-2 md:border-r-0 md:border-l-2 flex flex-col p-3 md:p-5">
          <div className="text-center">
            <h2 className="text-slate-500 text-xl">Your enrolled lessons</h2>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="flex flex-col gap-2 flex-auto">
              <h2 className="text-slate-500 ">
                Multiplication Bootcamp Every thursdays By prof 11:00 ...
              </h2>
              <div className="flex gap-2">
                <span className="text-slate-500 flex gap-1">
                  <Book />
                  Mathematics
                </span>
                <span className="text-slate-500 flex gap-1">
                  <Users />
                  203 enrolled
                </span>
                <span className="text-slate-500 flex gap-1">
                  <Dot color="green" />
                  via shulea
                </span>
              </div>
            </div>
            <div className="flex-auto">
              <Link href={"/learner/lessons/PW1234J"}>
                <Button className="bg-primary">Open</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default learnerEnroll;
