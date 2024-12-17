"use client"; // Make this a client component

import React, { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import UploadLessonAvatar from "@/app/(modals)/UploadLessonAvatar"; // Import the modal
import { CloudUpload } from "lucide-react";

const UploadLessonAvatarClient = ({ lessonID}: { lessonID: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <>
      <Button color="primary" onClick={onOpen}>
        <CloudUpload />
        Avatar
      </Button>
      <UploadLessonAvatar
        isOpenUploadLessonAvatarModalOpen={isOpen}
        onOpenChangeUploadLessonAvatar={onClose}
        lessonID={lessonID}
      />
    </>
  );
};

export default UploadLessonAvatarClient;
