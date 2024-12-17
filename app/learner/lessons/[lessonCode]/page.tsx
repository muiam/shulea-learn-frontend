import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button as NextUiButton } from "@nextui-org/button";
import { Video } from "lucide-react";

function lessonSchedulesPage() {
  return (
    <div>
      <div className="p-3 h-screen">
        <div className="fle flex-col gap-3">
          <div className="flex items-center  space-x-4">
            <h2 className="text-slate-500 mb-0 mt-0">
              10/11/2024 Thursday (8:30 am - 11:00 am) is{" "}
              <span className="font-bold">ONGOING</span>
            </h2>

            <NextUiButton color="primary" className="py-4 px-4">
              <Video />
              Join
            </NextUiButton>
          </div>
          <h2 className="mt-10 text-slate-500">
            Toggle the schedules to access shared resources
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full text-slate-500">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-3">
                  <h2> 10/11/2024 Thursday (8:30 am - 11:00 am)</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    Here we share with you the resources send for this schedule
                    you attended.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h2> 20/11/2024 Wednesday (8:30 am - 11:00 am)</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    Here we share with you the resources send for this schedule
                    you attended.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h2> 19/11/2024 Friday (8:30 am - 11:00 am)</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    Here we share with you the resources send for this schedule
                    you attended.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default lessonSchedulesPage;
