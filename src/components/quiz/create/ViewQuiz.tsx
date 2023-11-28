"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import SingleQuizCard from "./SingleQuizCard";
import { Button } from "@/components/ui/button";
import { FileDown, Loader } from "lucide-react";
import { mcqsQuizType } from "@/types/common";

type Props = {
  loading: boolean;
  quizData:mcqsQuizType[] | [];
};

export default function ViewQuiz({ loading, quizData }: Props) {
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
            <Button>
              <FileDown size={18} className="mr-2" /> Export to PDF
            </Button>
          </div>
          <ScrollArea className="h-[425px] px-4">
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
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
