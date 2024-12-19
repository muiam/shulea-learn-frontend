"use client";
import React from "react";
import AuthLayout from "../AuthLayout";
import { ArrowDownFromLine, Book, Clock, Video, Wallet } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <AuthLayout>
      <div className="p-3 text-slate-500">
        <h1>
          Welcome back <strong>{user?.firstName}</strong>
        </h1>
        <Button aria-colindex={5} fullWidth className="z-5">
          A sample Button
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
