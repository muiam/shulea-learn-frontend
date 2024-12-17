// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";
const myAppFont = Nunito({ subsets: ["latin"] });
import { SanityLive } from "@/sanity/lib/live";
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
      <Head>
        <title>shulea learn - Teach, Learn, Earn!</title>
        <meta
          name="description"
          content="hulea learn is learning platform that enables tutors create lessons , enroll learners easily , receive enrollment fees into their wallets and offer training with resource sharing all under one roof"
        />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://shulea-learn-frontend.vercel.app/logo.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="shulea learn - Teach, Learn, Earn!"
        />
        <meta
          name="twitter:description"
          content="shulea learn is learning platform that enables tutors create lessons , enroll learners easily , receive enrollment fees into their wallets and offer training with resource sharing all under one roof."
        />
        <meta
          name="twitter:image"
          content="https://shulea-learn-frontend.vercel.app/logo.svg"
        />
      </Head>
      <body className={myAppFont.className}>
        
          <SanityLive />
          <ClerkProvider>
            <NextUIProvider>
              {children}
              <Toaster />
            </NextUIProvider>
          </ClerkProvider>
      </body>
    </html>
  );
}
