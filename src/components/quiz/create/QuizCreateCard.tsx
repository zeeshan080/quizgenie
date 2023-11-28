"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import QuizTextTab from "./QuizTextTab";
import QuizTopicTab from "./QuizTopicTab";
import { QuizType } from "@/types/common";
import QuizUrlTab from "./QuizUrlTab";

type Props = {
  getQuizData: (quiz:QuizType[]) => void;
  loading: (loading: boolean) => void;
};

export default function QuizCreateCard({getQuizData,loading}: Props) {
  return (
    <div className="lg:w-[50%]">
      <Tabs defaultValue="text">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="topic">Topic</TabsTrigger>
          <TabsTrigger value="url">URL</TabsTrigger>
          <TabsTrigger value="uploads">Uploads</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <QuizTextTab value="text" quizData = {getQuizData} loading={loading}/>
        <QuizTopicTab value="topic" quizData = {getQuizData} loading={loading} />
        <QuizUrlTab value="url" quizData = {getQuizData} loading={loading}/>
      </Tabs>
    </div>
  );
}
