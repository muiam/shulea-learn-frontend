"use client";
import React from "react";
import AuthLayout from "../AuthLayout";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import {
  ArrowUpFromLine,
  Wallet,
  BookOpen,
  Users,
  Award,
  Video,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import LessonsByRoles from "@/app/_components/_private/LessonsByRoles";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <AuthLayout>
      <div className="p-4 md:p-6 text-slate-700 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-xl bg-white shadow-md p-6">
          <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100">
            <h2 className="text-xl font-semibold">Hi {user?.firstName} 👋</h2>
            <p className="text-slate-600">Welcome to your dashboard</p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100">
            <Award className="w-10 h-10 text-blue-600" />
            <div>
              <h2 className="font-semibold">Pro Tutor</h2>
              <div className="flex items-center gap-1">
                <span>⭐</span>
                <span className="font-medium">4.0/5.0</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100">
            <div className="flex gap-4">
              <BookOpen className="w-10 h-10 text-green-600" />
              <div>
                <h2 className="font-semibold">8 Lessons</h2>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>2000 + enrolled</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Wallet className="w-10 h-10 text-orange-600" />
                <div className="flex-grow">
                  <h2 className="font-semibold">KES 90,000</h2>
                </div>
                <Button color="primary" size="sm" className="ml-auto">
                  <ArrowUpFromLine className="w-4 h-4" />
                  <span className="ml-1">Cashout</span>
                </Button>
              </div>
              <Link href={""}> view history</Link>
            </div>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-blue-100">
                <Video className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Introduction to React Hooks</h3>
                <p className="text-sm text-slate-500">with John Doe</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-slate-500" />
              <span className="text-sm">Today, 2:00 PM</span>
            </div>
            <Button color="primary" size="sm">
              Join Session
            </Button>
          </div>
        </div>

        <LessonsByRoles />
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
