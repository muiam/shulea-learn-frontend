"use client";
import React from "react";
import AuthLayout from "../(learnerAuthLayout)/learnerAuthLayout";
import { Label } from "@/components/ui/label";
import { Button, Checkbox, Chip } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button as NextUiButton } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Link from "next/link";

const initialSubjects = [
  "Mathemematics",
  "Business",
  "English",
  "Swahili",
  "IT",
  "Economics",
  "Physics",
  "Finance",
  "Forex",
  "Other",
];

function learnerPostQuestionPage() {
  const [subjects, setSubjects] = React.useState(initialSubjects);
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(
    null
  );

  const handleChipClick = (subject: string) => {
    setSelectedSubject(subject); // Set the selected subject
  };

  return (
    <div>
      <AuthLayout>
        <div className="h-screen mt-10 flex flex-col md:flex-row">
          <div className="flex  flex-col gap-3 justify-start md:w-[400px] mr-3 ml-3  md:mr-10 md:ml-10">
            <Label className="text-md text-slate-500">Subject:</Label>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject, index) => (
                <Chip
                  aria-rowcount={5}
                  className={`text-md text-slate-500 cursor-pointer m-1 ${
                    selectedSubject === subject
                      ? "bg-primary text-slate-500"
                      : ""
                  }`}
                  onClick={() => handleChipClick(subject)}
                  key={index}
                  variant="flat"
                  style={{ flex: "0 0 calc(20% - 8px)" }} // Adjust the width based on the margin
                >
                  {subject}
                </Chip>
              ))}
            </div>
            <Label className="text-md text-slate-500">
              Question or Request:
            </Label>
            <div>
              <Textarea />
            </div>
            <Label className="text-md text-slate-500">
              Upload file (optional):
            </Label>
            <div>
              <Input type="file" />
            </div>

            <div className="flex gap-5">
              <Label className="text-md text-slate-500">
                I need a live session
              </Label>
              <Checkbox />
            </div>
            <div>
              <NextUiButton
                size="md"
                color="primary"
                disabled
                className="w-full text-md text-slate-500"
              >
                Post
              </NextUiButton>
            </div>
          </div>
          <div className="flex flex-col h-auto gap-5 mb-10">
            <div className="mt-10 md:mt-0 border-t-2 md:border-t-0 md:border-l-2 flex flex-col gap-10">
              <div className="mr-3 ml-3  md:mr-10 md:ml-10 flex mt-3 md:mt-0">
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <span className="text-green-700 flex justify-items-start">
                      ●
                    </span>
                    <h2 className="text-md md:mt-0 overflow-hidden whitespace-nowrap text-ellipsis w-[20ch] text-slate-500">
                      Discuss five circumstances under which a ...{" "}
                    </h2>
                  </div>
                  <div className="flex flex-row gap-3">
                    <h2 className="text-slate-500">2 Bids found </h2>
                    <h2 className="text-slate-500">
                      lowest bid from{" "}
                      <span className="text-sm text-primary">@pius</span>
                    </h2>
                  </div>
                </div>

                <Button color="primary" size="sm" className="ml-10">
                  Open
                </Button>
              </div>
              <div className="mr-3 ml-3  md:mr-10 md:ml-10 flex mt-3 md:mt-0">
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <span className="text-green-700 flex justify-items-start">
                      ●
                    </span>
                    <h2 className="text-md md:mt-0 overflow-hidden whitespace-nowrap text-ellipsis w-[20ch] text-slate-500">
                      Help me do my year 1 project, Doc attached ...{" "}
                    </h2>
                  </div>
                  <div className="flex flex-row gap-3">
                    <h2 className="text-slate-500">2 Bids found </h2>
                    <h2 className="text-slate-500">
                      lowest bid from{" "}
                      <span className="text-sm text-primary">@mark</span>
                    </h2>
                  </div>
                </div>

                <Button color="primary" size="sm" className="ml-10">
                  Open
                </Button>
              </div>
              <div className="mr-3 ml-3  md:mr-10 md:ml-10 flex mt-3 md:mt-0">
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <span className="text-green-700 flex justify-items-start">
                      ●
                    </span>
                    <h2 className="text-md md:mt-0 overflow-hidden whitespace-nowrap text-ellipsis w-[20ch] text-slate-500">
                      I need this questions attached done asap
                      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                    </h2>
                  </div>
                  <div className="flex flex-row gap-3">
                    <h2 className="text-slate-500">3 Bids found </h2>
                    <h2 className="text-slate-500">
                      lowest bid from{" "}
                      <span className="text-sm text-primary">@steve</span>
                    </h2>
                  </div>
                </div>

                <Button color="primary" size="sm" className="ml-10">
                  Open
                </Button>
              </div>
              <div className="mr-3 ml-3  md:mr-10 md:ml-10 flex mt-3 md:mt-0">
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <span className="text-green-700 flex justify-items-start">
                      ●
                    </span>
                    <h2 className="text-md md:mt-0 overflow-hidden whitespace-nowrap text-ellipsis w-[20ch] text-slate-500">
                      Help me solve the quandratic equations
                    </h2>
                  </div>
                  <div className="flex flex-row gap-3">
                    <h2 className="text-slate-500">12 Bids found </h2>
                    <h2 className="text-slate-500">
                      lowest bid from{" "}
                      <span className="text-sm text-primary">@mary</span>
                    </h2>
                  </div>
                </div>

                <Button color="primary" size="sm" className="ml-10">
                  Open
                </Button>
              </div>
            </div>
            <div className="flex justify-center text-center mt-10 text-primary text-xl">
              <Link href={"/learner/questions-posted"}> + 20 others</Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
}

export default learnerPostQuestionPage;
