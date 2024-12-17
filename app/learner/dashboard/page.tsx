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
        <div className="flex flex-col lg:flex-row mt-3">
          <div className="lg:h-screen basis-1/2 flex flex-col gap-5 p-3">
            <h2 className="flex gap-3">
              <Clock />
              Upcoming schedule
            </h2>
            <div className="flex gap-3">
              <Book />
              <h2>Mathematics</h2>
              <h2>11:00 - 12:30 pm </h2>
              <h2>
                With <span className="text-orange-500 underline">@paul</span>
              </h2>
              <Button disabled color="primary">
                <Video />
                join
              </Button>
            </div>
            <div className="flex flex-col lg:flex-row gap-3  font-bold text-xl ">
              <div className="flex flex-col gap-3 bg-slate-200 rounded-xl basis-1/3 custom-square">
                <div className="flex flex-col gap-3 items-center justify-center h-48">
                  <Book />
                  <h2>8 lessons</h2>
                  <h2>Enrolled</h2>
                </div>
              </div>

              <div className="flex flex-col gap-3 bg-slate-200 rounded-xl basis-1/3 custom-square">
                <div className="flex flex-col gap-3 items-center justify-center h-48">
                  <ArrowDownFromLine />
                  <h2>8 schedules</h2>
                  <h2>Attended</h2>
                </div>
              </div>

              <div className="flex flex-col gap-3 bg-slate-200 rounded-xl basis-1/3 custom-square">
                <div className="flex flex-col gap-3 items-center justify-center h-48">
                  <Clock />
                  <h2>1 schedule</h2>
                  <h2>Coming</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:h-screen mb-0 pb-0  lg:ml-3 basis-1/2 flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col gap-3 bg-slate-200 rounded-xl custom-square basis-1/2 font-bold">
                <div className="flex flex-col items-center justify-center h-32 gap-3">
                  <Wallet />
                  <h2>KES 20,000</h2>
                  <h2>Available</h2>
                </div>
              </div>
              <div className="flex flex-col basis-1/2 gap-5">
                <Label>Amount</Label>
                <Input placeholder="1000" type="number" />
                <Button color="primary">Top up</Button>
              </div>
            </div>
            <h2>Recent transactions</h2>

            <Table
              hideHeader
              aria-label="Recent transactions"
              className="text-2xl text-slate-500"
              color="warning"
            >
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>Type</TableColumn>
                <TableColumn>Amount</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Deposit</TableCell>
                  <TableCell>Money in</TableCell>
                  <TableCell>+ Kes 5,000</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                  <TableCell>Money out</TableCell>
                  <TableCell>- Kes 1,000</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Jane Fisher</TableCell>
                  <TableCell>Money out</TableCell>
                  <TableCell>- Kes 500</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Deposit</TableCell>
                  <TableCell>Money in</TableCell>
                  <TableCell>+ Kes 1500</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Enrollment</TableCell>
                  <TableCell>Money out</TableCell>
                  <TableCell>- Kes 1000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
