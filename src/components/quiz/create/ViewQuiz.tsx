"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import SingleQuizCard from "./SingleQuizCard";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

type Props = {};

const computerScienceQuestions = [
  {
    id: "1",
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Personal Unit",
      "Computer Processing Unit",
    ],
    answer: "Central Processing Unit",
    explain:
      "The CPU (Central Processing Unit) is the primary component of a computer responsible for executing instructions.",
  },
  {
    id: "2",
    question:
      "Which programming language is known as the 'mother of all languages'?",
    options: ["C", "Python", "Fortran", "Assembly"],
    answer: "Fortran",
    explain:
      "Fortran (Formula Translation) is considered the first high-level programming language, earning it the nickname 'mother of all languages'.",
  },
  {
    id: "3",
    question: "What is the purpose of an IP address?",
    options: [
      "Identifying a device on a network",
      "Accessing web pages",
      "Ensuring data security",
      "Creating email accounts",
    ],
    answer: "Identifying a device on a network",
    explain:
      "An IP address uniquely identifies a device on a network, allowing it to communicate with other devices.",
  },
  {
    id: "4",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinking Text Modern Language",
    ],
    answer: "Hyper Text Markup Language",
    explain:
      "HTML is a markup language used to create web pages and stands for Hyper Text Markup Language.",
  },
  {
    id: "5",
    question:
      "Which data structure operates on a Last In, First Out (LIFO) basis?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    answer: "Stack",
    explain:
      "A stack is a data structure that follows the Last In, First Out (LIFO) principle.",
  },
  {
    id: "6",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Structured Question Language",
      "Sequential Question Language",
    ],
    answer: "Structured Query Language",
    explain:
      "SQL is used for managing and manipulating databases and stands for Structured Query Language.",
  },
  {
    id: "7",
    question: "Which programming language uses 'print' to display output?",
    options: ["C++", "Java", "Python", "Ruby"],
    answer: "Python",
    explain:
      "'print' is used in Python to display output to the console or terminal.",
  },
  {
    id: "8",
    question: "What is the purpose of a firewall in computer networks?",
    options: [
      "Blocking unauthorized access",
      "Accelerating network speed",
      "Creating backups",
      "Encrypting data",
    ],
    answer: "Blocking unauthorized access",
    explain:
      "A firewall is a security device or software that monitors and controls incoming and outgoing network traffic, blocking unauthorized access.",
  },
  {
    id: "9",
    question: "What is the binary representation of the decimal number 10?",
    options: ["1010", "1100", "1001", "1110"],
    answer: "1010",
    explain: "The binary representation of 10 is 1010.",
  },
  {
    id: "10",
    question: "Which sorting algorithm has the best time complexity?",
    options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
    answer: "Merge Sort",
    explain:
      "Merge Sort has a time complexity of O(n log n) in the average and worst cases, making it efficient for large datasets.",
  },
];

export default function ViewQuiz({}: Props) {
  return (
    <div className="w-[50%] mx-4">
        {/* <div className="flex justify-center h-[425px] items-center animate-pulse">
            <Loader size={60} className="animate-spin delay-150 text-slate-900"/>
        </div> */}
      <div>
      <div className="flex justify-end mb-3 mr-4">
            <Button>Export to PDF</Button>
        </div>
      <ScrollArea className="h-[425px] px-4">
        {computerScienceQuestions.map((item,index) => (
          <SingleQuizCard
            key={item.id}
            questionNo ={index+1}
            question={item.question}
            options={item.options}
            showAnwser={true}
            correctAnswer={item.answer}
            answerExplain={item.explain}
          />
        ))}
      </ScrollArea>
      </div>
    </div>
  );
}
