"use client";
// app/_components/learnerAuthLayout.tsx
import React from "react";
import SideNavbar from "@/app/_components/_private/sideNavbar";
import LoggedInUserHeader from "@/app/_components/_private/LoggedInUserHeader";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="md:w-64 hidden fixed md:block">
        <SideNavbar />
      </div>
      <div className="ml-3 md:ml-64">
        <LoggedInUserHeader />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;