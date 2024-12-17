"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import { Chip } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

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

export default function CreateLessonModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subjects] = useState(initialSubjects);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [chargePerLesson, setChargePerLesson] = useState<boolean>(false);
  const [price, setPrice] = useState<number>();
  const [minimumNeeded, setMinimumNeeded] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const handleChipClick = (subject: string) => {
    setSelectedSubject(subject); // Set the selected subject
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    const formData = {
      title,
      description,
      subject: selectedSubject || "",
      chargePerLesson,
      price: chargePerLesson ? price : 0,
    };
    // lets send it to the api
    const response = await fetch("/api/create-lesson", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    setLoading(false);
    const res = await response.json();
    setLoading(false);
    if (res.status === 200) {
      toast.success("Lesson created successfully");
      onOpenChange();
      setTitle("");
      setDescription("");
      setSelectedSubject(null);
      setPrice(0);
    } else if (res.status === 404) {
      toast.error("User not found, please contact support");
      redirect("/sign-in");
    } else {
      toast.error("Failed to create lesson, try again later");
    }
  };

  return (
      <div className="flex justify-end">
        <div className="flex flex-col gap-2 md:mr-10">
          <Modal
            size="xl"
            isOpen={isOpen}
            placement="bottom-center"
            onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Create Lesson
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                          <Label className="text-md text-slate-500">
                            Subject:
                          </Label>
                          <div className="flex flex-wrap gap-2">
                            {subjects.map((subject, index) => (
                              <Chip
                                key={index}
                                className={`text-md text-slate-500 cursor-pointer m-1 ${
                                  selectedSubject === subject
                                    ? "bg-primary text-slate-500"
                                    : ""
                                }`}
                                onClick={() => handleChipClick(subject)}
                                variant="flat"
                                style={{ flex: "0 0 calc(20% - 8px)" }}>
                                {subject}
                              </Chip>
                            ))}
                          </div>
                        </div>

                        <div className="">
                          <Input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>

                        <div className="text-sm text-slate-500">
                          If you charge per lesson, tick the checkbox and enter
                          the price below, otherwise leave it blank and we will
                          allow you to set price per schedule
                        </div>

                        <div className="flex w-full justify-between">
                          <div className="flex gap-2 justify-center">
                            <Label className="text-md text-slate-500">
                              Charge per lesson ?
                            </Label>
                            <Checkbox
                              className="text-slate-500"
                              checked={chargePerLesson}
                              onChange={(e) =>
                                setChargePerLesson(e.target.checked)
                              }
                            />
                          </div>
                          <div className="flex-auto" hidden={!chargePerLesson}>
                            <Input
                              min={50}
                              type="number"
                              placeholder="your lesson price"
                              onChange={(e) => setPrice(Number(e.target.value))}
                            />
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="flex flex-col gap-3">
                            <Input
                              type="number"
                              placeholder="Minimum schedules needed"
                              min={1}
                              onChange={(e) =>
                                setMinimumNeeded(Number(e.target.value))
                              }
                            />
                            <p className="text-sm text-slate-500">
                              This is the minimum schedules learner should
                              attend to gain the lesson goals
                            </p>
                          </div>
                          <Input
                            type="number"
                            placeholder="Minimum needed"
                            onChange={(e) =>
                              setMinimumNeeded(Number(e.target.value))
                            }
                          />
                        </div>
                      </div>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onClick={handleSubmit}>
                      {loading ? (
                        <div>
                          <Spinner color="white" />
                        </div>
                      ) : (
                        "Create"
                      )}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
  );
}
