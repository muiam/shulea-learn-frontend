"use client";
import { Label } from "@/components/ui/label";
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Modal,
  ModalContent,
  useDisclosure,
  Input,
  Checkbox,
  TimeInput,
  Calendar,
  Spinner,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { today, getLocalTimeZone, Time } from "@internationalized/date";
import { Plus } from "lucide-react";
import { TimeValue, DateValue } from "@react-types/datepicker";
import { toast } from "sonner";

interface LessonDetails {
  title: string;
  description: string;
  subject: string;
  price: number;
  imageUrl: string;
  chargePerLesson: boolean;
}

function CreateScheduleModal({ lessonId }: { lessonId: string }) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const [goal, setGoal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [hostedOnShulea, setHostedOnShulea] = useState(false);
  const [link, setLink] = useState("");
  const [lessonDetails, setLessonDetails] = useState<LessonDetails | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<DateValue>();
  const [startTime, setStartTime] = useState<TimeValue>(new Time(8, 0));
  const [endTime, setEndTime] = useState<TimeValue>(new Time(9, 0));
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const fetchLesson = async () => {
    setLoading(true);
    const res = await fetch(`/api/lesson/${lessonId}/details`);
    const data = await res.json();
    console.log("the data is", data);
    setLessonDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLesson();
  }, [lessonId]);

  const sendScheduleDataToServer = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/lesson/${lessonId}/new-schedule`, {
      method: "POST",
      body: JSON.stringify({
        topic,
        capacity,
        date,
        startTime,
        endTime,
        price,
        link,
        hostedOnShulea,
        description,
        lessonId,
      }),
    });
    if (res.ok) {
      toast.success("Schedule created successfully");
      onOpenChange()
    } else {
      toast.error("Failed to create schedule");
      
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Check if endTime is still valid (greater than startTime + 1 hour)
    if (endTime <= new Time(startTime.hour + 1, startTime.minute)) {
      setEndTime(new Time(startTime.hour + 1, startTime.minute)); // Set end time to 1 hour after start time
    }
  }, [startTime]); // Triggered when startTime changes

  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-slate-500 font-bold text-center">Schedules</h1>
        <Button variant="light" onClick={onOpen}>
          <Plus  size={50}/>
        </Button>
      </div>
      <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent>
          {(onClose) => (
            <>
                <ModalHeader>
                  <h2>Create a Schedule</h2>
                </ModalHeader>
                <ModalBody>
                  <form className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <Input
                        label="Topic"
                        placeholder="Enter your topic"
                        onChange={(e) => setTopic(e.target.value)}
                      />
                      <Input
                        label="Capacity"
                        placeholder="maximum No. of learners"
                        onChange={(e) => setCapacity(parseInt(e.target.value))}
                      />
                    </div>
                      <div className="flex gap-3 w-full">
                        <div className="w-1/2 ">
                          <Calendar
                            calendarWidth="100%"
                            aria-label="Date"
                            defaultValue={today(getLocalTimeZone())}
                            minValue={today(getLocalTimeZone())}
                            value={date}
                            onChange={setDate}
                          />
                        </div>
                        <div className="w-1/2 flex flex-col gap-3">
                          <TimeInput
                            label="Lesson Start Time"
                            defaultValue={new Time(8, 0)}
                            value={startTime}
                            onChange={setStartTime}
                          
                          />

                          <TimeInput
                            label="Lesson end Time"
                            defaultValue={new Time(8, 0)}
                            value={endTime}
                            minValue={new Time(startTime.hour + 1, startTime.minute)}
                            onChange={setEndTime}
                            
                          />

                          <div className="flex gap-3">
                            <Label className="text-md text-slate-500">
                              Hosting on shulea ?
                            </Label>
                            <Checkbox
                              className="text-slate-500"
                              onChange={(e) =>
                                setHostedOnShulea(e.target.checked)
                              }
                            />
                          </div>
                          <div hidden={hostedOnShulea}>
                            <Input
                              label="Link"
                              placeholder="Enter the link"
                              onChange={(e) => setLink(e.target.value)}
                            />
                          </div>

                          {loading && <Spinner size="md" />}
                          <div hidden={lessonDetails?.chargePerLesson}>
                            <Input
                              type="number"
                              label="Price"
                              placeholder="Enter the price"
                              onChange={(e) =>
                                setPrice(parseInt(e.target.value))
                              }
                            />
                          </div>
                          <p className="text-slate-500">
                            {lessonDetails?.chargePerLesson &&
                              `The price per lesson is ${lessonDetails?.price}`}
                      </p>
                      <div>
                        <Input
                          label="Description"
                          placeholder="Enter the description"
                          onChange={(e) => setDescription(e.target.value)}
                        />  
                      </div>
                    </div>
                    
                      </div>
                  </form>
                </ModalBody>
                <ModalFooter>
                <div className="flex justify-end gap-3">
                  <div hidden={loading}>
                    <Button color="default" onClick={onClose}>
                      close
                    </Button>
                  </div>
                    <Button
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                      color="primary"
                      onClick={sendScheduleDataToServer}
                      isLoading={isLoading}
                      disabled={!topic || loading || !date || new Time(startTime.hour + 1, startTime.minute) >= endTime}>
                      Create
                    </Button>
                  </div>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CreateScheduleModal;
