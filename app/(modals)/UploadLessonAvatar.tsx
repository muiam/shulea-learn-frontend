"use client";

import { UploadDropzone } from "@/utils/uploading";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { revalidatePath } from "next/cache";

export default function UploadLessonAvatar({isOpenUploadLessonAvatarModalOpen, onOpenChangeUploadLessonAvatar, lessonID}: {isOpenUploadLessonAvatarModalOpen: boolean, onOpenChangeUploadLessonAvatar: (open: boolean) => void, lessonID: string}) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const[closeButtonDisabled, setCloseButtonDisabled] = useState<boolean>(false);
  
  const sendImageUrlToServer = async () => {
    setIsUploading(true);
    // console.log("The imageUrl and lesson id received by sending to server is: ", imageUrl, "The lessonID is: ", lessonID);
    const response = await fetch("/api/upload-lesson-avatar", {
      method: "Post",
      body: JSON.stringify({lessonID: lessonID, imageUrl: imageUrl}),
    });
    setIsUploading(false);
    if(response.ok){
      toast.success("Avatar Upload Completed");
      onOpenChangeUploadLessonAvatar(false)
    }else{
      toast.error("Failed to upload avatar");
    }
  }
  
  useEffect(() => {
    if(imageUrl){
      sendImageUrlToServer();
    }
  }, [imageUrl]);
  
    
  return (
    <Modal placement="bottom" isOpen={isOpenUploadLessonAvatarModalOpen} onOpenChange={onOpenChangeUploadLessonAvatar}> 
      <ModalContent>
        {(onClose) => (
          <>
        <ModalHeader>Hello , lets upload your lesson avatar 😍😍 </ModalHeader>
            <ModalBody>
              {isUploading ? (
                <Spinner color="primary" size="lg"  label="Uploading..."/>
              ) : (
              <UploadDropzone
                appearance={{
                  uploadIcon: "text-primary",
                  label: "Upload Your Lesson Avatar",
                  button: "bg-primary",
                  
                  
                }}  
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
          // Do something with the response
              toast.success("wait as we send your avatar to the server");
              setImageUrl(res[0].url);
              setCloseButtonDisabled(true);
            
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          toast.error(`ERROR! ${error.message}`);
        }}
      />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="disabled:bg-default-100 disabled:text-default-400 disabled:border-default-200 disabled:cursor-not-allowed" onClick={onClose} isDisabled={closeButtonDisabled}>
                Close
              </Button>
            </ModalFooter>
        </>
        )}
      </ModalContent>
    </Modal>
  );
}
