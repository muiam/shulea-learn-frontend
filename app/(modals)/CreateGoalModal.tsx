"use client";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { toast } from "sonner";
import { Plus } from "lucide-react";
function CreateGoalModal({ lessonId }: { lessonId: string }) {
  const [goal, setGoal] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  const sendGoal = async () => {
    setIsLoading(true);
    const response = await fetch("/api/set-goals", {
      method: "POST",
      body: JSON.stringify({ goal: goal, lessonId: lessonId }),
    });
    const responseData = await response.json();

    if (response.ok) {
      onOpenChange();
      toast.success(responseData.message);
    } else {
      toast.error(responseData.message);
    }
    setIsLoading(false);
  };
  return (
    <div>
      {/* create goal modal */}
      <div className="flex gap-2 items-center">
        <h1 className="text-slate-500 font-bold text-center ">Goals</h1>
        <Button variant="light" onClick={onOpen}>
          <Plus size={50} />
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h2>Create Goal</h2>
              </ModalHeader>
              <ModalBody>
                <form>
                  <Input
                    label="Goal"
                    placeholder="Enter your goal"
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-end gap-3">
                  <Button color="default" onClick={onClose}>
                    close
                  </Button>
                  <Button
                    color="primary"
                    onClick={sendGoal}
                    isLoading={isLoading}>
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

export default CreateGoalModal;
