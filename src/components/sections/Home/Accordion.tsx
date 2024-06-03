import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const AccordionCard = () => {
  const [active, setActive] = useState({
    value: stages[1],
    img: "/assets/video2.svg",
  });

  const activeAccordion = (value: string) => {
    return active.value === value;
  };

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={active.value}
      onValueChange={(value) => {
        setActive((prev) => ({
          ...prev,
          value,
        }));
      }}
      className="grid gap-1"
    >
      <AccordionItem
        id="accodion-1"
        value={stages[0]}
        className={cn("border px-5 rounded-[7px]", {
          "shadow-[0px_8px_30px_rgba(0_0_0/0.08)]": activeAccordion(stages[0]),
        })}
      >
        <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
          <span
            className={cn(
              "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
              {
                "bg-[#8BA4FD]": activeAccordion(stages[0]),
              }
            )}
          >
            <img
              loading="lazy"
              src={
                activeAccordion(stages[0]) ? active.img : "/assets/video1.svg"
              }
              className="size-4"
            />
          </span>

          <h4>
            <b>Step 1:</b> {stages[0]}
          </h4>
        </AccordionTrigger>

        <AccordionContent className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          voluptatibus quisquam natus accusantium! Suscipit sunt aspernatur
          praesentium quasi minus. Architecto.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        id="accodion-2"
        value={stages[1]}
        className={cn("border px-5 rounded-[7px]", {
          "shadow-xl": activeAccordion(stages[1]),
        })}
      >
        <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
          <span
            className={cn(
              "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
              {
                "bg-[#8BA4FD]": activeAccordion(stages[1]),
              }
            )}
          >
            <img
              loading="lazy"
              src={
                activeAccordion(stages[1]) ? active.img : "/assets/video1.svg"
              }
              className="size-4"
            />
          </span>

          <h4>
            <b>Step 2:</b> {stages[1]}
          </h4>
        </AccordionTrigger>

        <AccordionContent className="mt-4">
          Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        id="accodion-3"
        value={stages[2]}
        className={cn("border px-5 rounded-[7px]", {
          "shadow-xl": activeAccordion(stages[2]),
        })}
      >
        <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
          <span
            className={cn(
              "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
              {
                "bg-[#8BA4FD]": activeAccordion(stages[2]),
              }
            )}
          >
            <img
              loading="lazy"
              src={
                activeAccordion(stages[2]) ? active.img : "/assets/video1.svg"
              }
              className="size-4"
            />
          </span>

          <h4>
            <b>Step 3:</b> {stages[2]}
          </h4>
        </AccordionTrigger>

        <AccordionContent className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          inventore deserunt magnam facilis saepe architecto tenetur facere
          exercitationem! Fuga, odit.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        id="accodion-4"
        value={stages[3]}
        className={cn("border px-5 rounded-[7px]", {
          "shadow-xl": activeAccordion(stages[3]),
        })}
      >
        <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
          <span
            className={cn(
              "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
              {
                "bg-[#8BA4FD]": activeAccordion(stages[3]),
              }
            )}
          >
            <img
              loading="lazy"
              src={
                activeAccordion(stages[3]) ? active.img : "/assets/video1.svg"
              }
              className="size-4"
            />
          </span>

          <h4>
            <b>Step 4:</b> {stages[3]}
          </h4>
        </AccordionTrigger>

        <AccordionContent className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          inventore deserunt magnam facilis saepe architecto tenetur facere
          exercitationem! Fuga, odit.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        id="accodion-5"
        value={stages[4]}
        className={cn("border px-5 rounded-[7px]", {
          "shadow-xl": activeAccordion(stages[4]),
        })}
      >
        <AccordionTrigger className="h-20 flex items-center justify-start text-start gap-3 lg:gap-5">
          <span
            className={cn(
              "min-w-[57px] h-[57px] flex items-center justify-center rounded-full bg-[#ECECEC]",
              {
                "bg-[#8BA4FD]": activeAccordion(stages[4]),
              }
            )}
          >
            <img
              loading="lazy"
              src={
                activeAccordion(stages[4]) ? active.img : "/assets/video1.svg"
              }
              className="size-4"
            />
          </span>

          <h4>
            <b>Step 5:</b> {stages[4]}
          </h4>
        </AccordionTrigger>

        <AccordionContent className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          inventore deserunt magnam facilis saepe architecto tenetur facere
          exercitationem! Fuga, odit.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCard;

const stages = [
  "Resume Screening",
  "Video Interview",
  "Technical Evaluation",
  "Application Review",
  "Lets get to work",
];
