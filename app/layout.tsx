// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { UserProvider } from "./learner/(userContext)/userContext";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const myAppFont = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shulea learn - Teach, Learn, Earn!",
  description:
    "shulea learn is learning platform that enables tutors create lessons , enroll learners easily , receive enrollment fees into their wallets and offer training with resource sharing all under one roof",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myAppFont.className}>
        <NextUIProvider>
          <UserProvider>
            {children}
            <Toaster />
          </UserProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
