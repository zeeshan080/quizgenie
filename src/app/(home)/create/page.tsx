import QuizCreateCard from "@/components/quiz/create/QuizCreateCard";
import React from "react";

type Props = {};

export default function createPage({}: Props) {
  return (
    <section className="bg-gray-50  h-screen">
      <h1 className="text-2xl font-bold text-center py-4">Create New Quiz</h1>
      <div className="bg-white shadow-md rounded-lg p-8 flex justify-between mx-16">
        <QuizCreateCard />
      </div>
    </section>
  );
}
