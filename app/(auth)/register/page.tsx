import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { Input } from "@nextui-org/input";

function registerPage() {
  return (
    <div className="flex flex-col  gap-3 sm:flex-row h-screen">
      <div className="flex-1 order-2">
        <div className="hidden md:block md:mt-10 h-[430px] mr-10 ">
          <div className="border-2 border-primary rounded-xl overflow-hidden h-full bg-[#e67e22] flex justify-center items-center">
            <div className="text-center flex flex-row">
              <h1 className="text-slate-200 font-extrabold text-[40px]">S</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">I</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">G</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">N</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">U</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">P</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 justify-center items-center mr-10 sm: ml-10">
        <div className="mt-10">
          <Tabs defaultValue="learner">
            <TabsList className="grid w-full grid-cols-2 bg-[#e67e22]">
              <TabsTrigger value="learner">Learner</TabsTrigger>
              <TabsTrigger value="tutor">Tutor</TabsTrigger>
            </TabsList>
            <TabsContent value="tutor">
              <Card>
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>
                    Hi tutor 😍😍 give us your email and passowrd
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="text" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Register</Button>
                </CardFooter>
                <div className="mb-10 ml-20">
                  <p>
                    Have an account ?{" "}
                    <Link href={"/login"} className="underline text-primary">
                      Login
                    </Link>
                  </p>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="learner">
              <Card>
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>
                    Hi Learner 😍😍 give us your email and passowrd
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Register</Button>
                </CardFooter>
                <div className="mb-10 ml-20">
                  <p>
                    Have an account ?{" "}
                    <Link href={"/login"} className="underline text-primary">
                      Login
                    </Link>
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default registerPage;
