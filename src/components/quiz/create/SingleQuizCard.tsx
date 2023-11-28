import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import React from "react";
import SingleQuizCardOption from "./SingleQuizCardOption";

type Props = {
  question: string;
  questionNo: number;
  options?: string[];
  showAnwser: boolean;
  correctAnswer: string;
  answerExplain: string;
};

export default function SingleQuizCard({
  question,
  options,
  questionNo,
  showAnwser,
  correctAnswer,
  answerExplain,
}: Props) {
  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle className="text-[20px] leading-5">{questionNo}. {question}</CardTitle>
      </CardHeader>
      <CardContent>
        {
          options &&
          <RadioGroup>
          {options.map((option,index) => (
            <SingleQuizCardOption key={index} option={option} value={option} />
          ))}
        </RadioGroup>
        }
      </CardContent>
      <CardFooter>
        {showAnwser && (
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600">Correct Answer: {correctAnswer}</p>
            <p className="text-gray-600">Answer Explain: {answerExplain}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
