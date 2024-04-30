import React, { useState, FC } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button className="w-full text-left p-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <h4 className="font-bold text-lg">{question}</h4>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}


interface Faq {
  question: string;
  answer: string;
}

const FaqSection: FC = () => {
  const faqs: Faq[] = [
    {
      question: "How are the predicted papers created?",
      answer: "Our predicted papers are created by analysing past exams and finding trends in topics to provide the most likely scenarios for upcoming exams."
    },
    {
      question: "Can I use these resources for my exam preparation?",
      answer: "Absolutely, these resources are designed to help students prepare for exams by providing practice materials that mirror the format and style of actual exams."
    },
    {
      question: "How accurate is this predicted paper?",
      answer: "Don't ask silly questions. "
    },
    {
      question: "Why is the questions similar to past paper questions?",
      answer: "As I am not OCR to create brand new questions, maybe in the future I will create new questions so stay subscribed. Our predicted papers are created by analysing past exams and finding trends to provide the most likely scenarios for upcoming exams."
    },
    {
      question: "Can you make a predicted paper for Edexcel or AQA?",
      answer: "Unfortunately not this year (2024), as I need to study these specs and takes very long to learn and analayse trends. The reason why OCR have priority is I am very familar with OCR spec as I did and majority do OCR Computer Science. However in the future, if we grow I would love to do predicted papers for every spec to help as much people as possible! ."
    },
    {
      question: "How can I get updates about new predicted papers?",
      answer: "You can follow us on YouTube and TikTok."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-xl font-bold my-6 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FaqSection;
