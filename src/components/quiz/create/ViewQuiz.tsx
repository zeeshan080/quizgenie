"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import SingleQuizCard from "./SingleQuizCard";
import { Button } from "@/components/ui/button";
import { Copy, FileDown, Loader, Share2 } from "lucide-react";
import { QuizType } from "@/types/common";
import generatePDF from "react-to-pdf";
import { RefObject, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  loading: boolean;
  quizData: QuizType[] | [];
};

export default function ViewQuiz({ loading, quizData }: Props) {
  const targetRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  return (
    <div className="lg:w-[50%] lg:mx-4">
      {!loading && quizData.length == 0 ? (
        <div className="flex justify-center items-center h-[425px]">
          <p className="text-[16px] text-gray-400">
            Generate Quiz Will display here...
          </p>
        </div>
      ) : loading ? (
        <div className="flex justify-center h-[425px] items-center animate-pulse">
          <Loader size={60} className="animate-spin delay-150 text-slate-900" />
        </div>
      ) : (
        <div>
          <div className="flex justify-end mt-3 lg:mt-0 mb-3 mr-4">
            <div className="flex items-center gap-4">
              <div>
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Share2 size={20} className="mr-2" />
                      <span>Share</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-32" align="end">
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Copy Link</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button
                onClick={() => generatePDF(targetRef, { method: "open" })}
              >
                <FileDown size={18} className="mr-2" /> Export to PDF
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[425px] px-4">
            <div ref={targetRef}>
              {quizData.map((item, index) => (
                <SingleQuizCard
                  key={item.id}
                  questionNo={index + 1}
                  question={item.question}
                  options={item.options}
                  showAnwser={true}
                  correctAnswer={item.answer}
                  answerExplain={item.explanation}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
