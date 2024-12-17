"use client";
import React from "react";
import AuthLayout from "../../(learnerAuthLayout)/learnerAuthLayout";
import Image from "next/image";
import { CheckCircleIcon, CircleCheckBig, Star, Video } from "lucide-react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

function questionBidsPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <AuthLayout>
        <div className="p-5">
          <div className="flex flex-col lg:flex-row">
            <div className=" basis-2/3 flex flex-col gap-5">
              <div className="flex gap-3 text-center justify-center text-slate-500">
                <h2>3 bids found</h2>
                <h2>Question/request title goes here ....</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto min-w-full border-separate border-spacing-10">
                  <tbody>
                    <tr>
                      <td>
                        <Image
                          src={"/user.jpeg"}
                          width={40}
                          height={40}
                          alt="tutor - image"
                          className="rounded-full"
                        />
                      </td>
                      <td>
                        <Link href={""} className="text-orange-500 underline">
                          @Lockyer
                        </Link>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" />
                        </div>
                      </td>
                      <td>Kes 1000</td>
                      <td>
                        <Button
                          onPress={onOpen}
                          color="primary"
                          className="ml-auto"
                        >
                          <CircleCheckBig />
                          Accept
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          src={"/user.jpeg"}
                          width={40}
                          height={40}
                          alt="tutor - image"
                          className="rounded-full"
                        />
                      </td>
                      <td>
                        <Link href={""} className="text-orange-500 underline">
                          @martin
                        </Link>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                        </div>
                      </td>
                      <td>Kes 1000</td>
                      <td>
                        <Button color="primary" className="ml-auto">
                          <CircleCheckBig />
                          Accept
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          src={"/user.jpeg"}
                          width={40}
                          height={40}
                          alt="tutor - image"
                          className="rounded-full"
                        />
                      </td>
                      <td>
                        <Link href={""} className="text-orange-500 underline">
                          @Luther
                        </Link>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" fill="yellow" />
                          <Star color="yellow" />
                        </div>
                      </td>
                      <td>Kes 700</td>
                      <td>
                        <Button color="primary" className="ml-auto">
                          <CircleCheckBig />
                          Accept
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border-t-2 lg:border-t-0 lg border-l-2 basis-1/3 h-screen p-2">
              <div className="fle flex-col gap-3">
                <div className="flex items-center  space-x-4">
                  <h2 className="text-slate-500 mb-0 mt-0">
                    session starts in
                    <span className="font-bold ml-2">1 hr time</span>
                  </h2>

                  <Button color="primary" className="py-4 px-4">
                    <Video />
                    Join
                  </Button>
                </div>
                <h2 className="mt-10 text-slate-500">
                  Toggle to access shared resource
                </h2>
              </div>
              <Accordion
                type="single"
                collapsible
                className="w-full text-slate-500"
              >
                <div className="grid grid-cols-1 gap-5">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex gap-3">
                        <h2>Resource 1</h2>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p>
                          Here we share with you the resources send for this
                          schedule you attended.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <h2> Resource 2</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p>
                          Here we share with you the resources send for this
                          schedule you attended.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <h2>Resource 3</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p>
                          Here we share with you the resources send for this
                          schedule you attended.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </AuthLayout>

      {/* modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                You are about to accept this bid
              </ModalHeader>
              <ModalBody>
                <p>When you accept this bid , the following shall happen :</p>
                <p>
                  We shall put KES 1000 from your wallet into a temporary escrow
                  wallet
                </p>
                <p>
                  NOTE that the amount will not be <strong>Accessible</strong>{" "}
                  till this order is over
                </p>
                <p>
                  Please refer to the platform guidelines as it is your
                  responsibility to agree and acknowledge services rended by
                  releasing the cash (KES 1000) after this service has been
                  offered to you
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  <CheckCircleIcon />
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default questionBidsPage;
