import React from 'react';
import {  Accordion,  AccordionContent, AccordionItem,  AccordionTrigger,} from '@/app/components/ui/accordion'
import { FAQs } from './FAQs/faq';


export default function Faq() {
    return (
      <Accordion
        type='single'
        collapsible
        className='w-full lg:w-1/2 mx-auto my-10 p-3 sm:p-0'
      >
        {FAQs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
}
