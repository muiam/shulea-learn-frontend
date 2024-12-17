import {
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { ShareSocial } from "react-share-social";
export default function ShareComponent({
  isOpen,
  onOpenChange,
  onOpen,
  lessonTitle,
  lessonLink,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onOpen: () => void;
  lessonTitle: string;
  lessonLink: string;
}) {
  // We can use inline-style
  const style = {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
      height: "200px", 
    },
    title: {
      color: "aquamarine",
    },
  };
  return (
    <div>
      <Modal placement="bottom" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-slate-500">Share</h2>
              </ModalHeader>
              <ModalBody>
                <ShareSocial
                  socialTypes={[
                    "facebook",
                    "twitter",
                    "linkedin",
                    "whatsapp",
                    "telegram",
                    "reddit",
                    "email",
                    "ok",
                    "mailru",
                    "line",
                    "livejournal",
                  ]}
                  url={lessonLink}
                  title={lessonTitle}
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
