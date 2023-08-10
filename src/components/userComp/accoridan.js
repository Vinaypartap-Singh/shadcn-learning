"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Accordian() {
  const accordianData = [
    {
      id: 1,
      title: "Is it accessible?",
      content: " Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      id: 2,
      title: "Is it styled?",
      content:
        "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
    },
    {
      id: 3,
      title: "Is it animated?",
      content:
        "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
    },
  ];
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordianData.map(({ id, title, content }) => {
        return (
          <AccordionItem value={`${id}`} key={id}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
