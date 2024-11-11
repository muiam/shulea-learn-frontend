"use client";
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
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Spinner } from "@nextui-org/react";
import { config } from "@/config/axiosConfig";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/learner/(userContext)/userContext";
function loginPage() {
  const [studentUsername, setStudentUsername] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { updateUser } = useUser();

  const handleLearnerLogin = async () => {
    console.log(studentUsername, studentPassword);
    setIsLoading(true);

    const url = `${config.baseUrl}/auth/token/`;
    const headers = { ...config.headers };

    try {
      const response = await axios({
        method: "POST",
        url,
        data: {
          email: studentUsername,
          password: studentPassword,
        },
        headers,
        timeout: config.timeout,
      });

      const token = response.data["access"];
      localStorage.setItem("token", token);
      console.log("Token received:", token); // Debug log

      // Update user context
      console.log("Updating user with token:", token); // Debug log
      updateUser(token); // Call updateUser to update context

      setIsLoading(false);
      toast("Login successful");
      const redirectUrl = localStorage.getItem("redirectUrl"); // Default fallback URL
      if (redirectUrl) {
        localStorage.removeItem("redirectUrl"); // Clear the redirect URL
        router.push(redirectUrl);
      } else {
        router.replace("/learner/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      // setStudentUsername("");
      // setStudentPassword("");
    }
  };

  const handleTutorLogin = () => {};

  return (
    <div className="flex flex-col  gap-3 sm:flex-row h-screen">
      <div className="flex-1 order-2">
        <div className="hidden md:block md:mt-10 h-[480px] mr-10 ">
          <div className="border-2 border-primary rounded-xl overflow-hidden h-full bg-[#e67e22] flex justify-center items-center">
            <div className="text-center flex flex-row">
              <h1 className="text-slate-200 font-extrabold text-[40px]">S</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">I</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">G</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">N</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">I</h1>
              <h1 className="text-slate-200 font-extrabold text-[40px]">N</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 justify-center items-center mr-10 sm: ml-10">
        <div className="mt-10">
          <Tabs defaultValue="learner">
            <TabsContent value="learner">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Hi 😍😍 Enter your email and password to login
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      onChange={(event) => {
                        setStudentUsername(event.target.value);
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      onChange={(event) => {
                        setStudentPassword(event.target.value);
                      }}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-row gap-10">
                    <Button onClick={() => handleLearnerLogin()}>Login</Button>
                    {isLoading && (
                      <Spinner label="Loading..." color="warning" />
                    )}
                  </div>
                </CardFooter>
                <div className="mb-10 ml-20">
                  <p>
                    Forgot your password ?{" "}
                    <Link href={""} className="underline text-primary">
                      Reset
                    </Link>
                  </p>
                  OR
                  <p>
                    Dont have an account ?{" "}
                    <Link href={"/register"} className="underline text-primary">
                      Register
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

export default loginPage;
