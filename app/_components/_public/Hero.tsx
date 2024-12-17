import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import {
  Book,
  BookHeart,
  DollarSign,
  FilePlus2,
  FolderInput,
  Radio,
  UserRoundCog,
  Wallet,
} from "lucide-react";

function Hero() {
  return (
    <div className="px-10 md:px-28 lg:px-20 mt-10">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src="/elearning-portals-cover-picture.svg"
            alt="product screen"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2 text-slate-500">
          <h2 className="font-extrabold text-[30px] text-primary">
            Enter the Edtech revolution
          </h2>
          <p>
            Shulea Learn is a Kenyan startup that leverages on high end
            technology to make learning easy for both tutor and learnr by
            equiping them with a tool that powers the learning process
          </p>
          <p>
            Our learning platform has an integrated video conferencing software
            with classroom management tools and also lets you quickly create a
            lesson , let learners enroll and pay then schedule a meeting with
            the learners
          </p>
          <p>
            This way , you do not need to create forms for enrolling learners in
            your lessons and providing them payment details separately and later
            channel them to a meeting software as our app does it all for you
          </p>
          <div className="w-[[100px]">
            <Button
              size="md"
              fullWidth
              color="primary"
              className="font-extrabold mt-5">
              join waitlist
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex-col text-slate-500">
          <h2 className="font-extrabold text-primary mb-3 text-[30px] lg:text-[40px]">
            Create,Enroll,Teach,Earn
          </h2>
          <p className="font-light text-2xl text-slate-500">
            We have created the best edtech platform in the world ... We let
            learning be easy and secure for both tutor and learner.<br></br>
            The first world's edtech startup build on the Create , Enroll ,
            Train , Earn model
          </p>

          <div>
            <Button size="lg" color="primary" className="font-extrabold mt-5">
              join waitlist
            </Button>
          </div>
        </div>
        <div className="relative w-full h-auto">
          {" "}
          {/* Set height to ensure aspect ratio */}
          <Image
            src="/product-screen2.PNG"
            alt="shulea product"
            layout="fill" // This makes the image fill the entire container
            objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
            objectPosition="center" // Optional: aligns the image in the center if it doesn't cover the entire container
          />
        </div>
      </div>
      <div className=" mt-10 flex flex-col gap-3 sm:flex-row">
        <div className="h-[400px] border-2 border-primary flex-1 rounded-xl mb-10 p-5 shadow-md">
          <h2 className="font-extrabold text-center text-xl mb-4 text-slate-500">
            For Tutors
          </h2>
          <div className="flex flex-col gap-4">
            <p className="flex flex-row items-center gap-3 text-slate-500">
              <FilePlus2 aria-checked color="#e67e22" /> Create lessons easily
            </p>
            <p className="flex flex-row items-center gap-3 text-slate-500">
              <BookHeart color="#e67e22" aria-checked /> Learners Enroll
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <DollarSign aria-checked color="#e67e22" /> Receive enrollment
              fees
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <Radio aria-checked color="#e67e22" /> Stream live ...
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <FolderInput color="#e67e22" aria-checked /> Manage and share
              learning resources ...
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <UserRoundCog color="#e67e22" aria-checked /> Manage your learners
              ....
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <Wallet color="#e67e22" aria-checked /> Assist other learners
              revise and earn
            </p>
          </div>
          <Button
            size="lg"
            color="primary"
            className="text-center font-extrabold w-full mt-3">
            join waitlist
          </Button>
        </div>
        <div className="h-[400px] border-2 border-primary flex-1 rounded-xl mb-10 p-5 shadow-md">
          <h2 className="font-extrabold text-center text-xl mb-4">
            For Learners
          </h2>
          <div className="flex flex-col gap-4">
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <FilePlus2 color="#e67e22" aria-checked /> Post questions and
              receive live / written answers
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <BookHeart aria-checked color="#e67e22" /> Choose a tutor who
              meets your budget/rating for the question
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <Wallet aria-checked color="#e67e22" /> Manage funds on your
              wallet
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <Radio aria-checked color="#e67e22" /> Stream live ...
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <FolderInput aria-checked color="#e67e22" /> Receive learning
              resources ...
            </p>
            <p className="flex flex-row items-center gap-3 text-gray-700">
              <Book aria-checked color="#e67e22" /> Enjoy learning at your
              comfort ...
            </p>
          </div>
          <Button
            size="lg"
            color="primary"
            className="text-center font-extrabold w-full mt-3">
            join waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
