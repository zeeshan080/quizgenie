"use client";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectOption from "./SelectOption";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { textFormSchema } from "@/types/common";

type Props = {
  value: string;
};

export default function QuizTextTab({ value }: Props) {
  const form = useForm<z.infer<typeof textFormSchema>>({
    resolver: zodResolver(textFormSchema),
  });

  function onSubmit(data: z.infer<typeof textFormSchema>) {
    console.log(data);
   
  }

  return (
    <TabsContent value={value}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full m-2">
                <FormField
                  control={form.control}
                  name="questionType"
                  render={({ field }) => (
                    <FormItem>
                      <SelectOption
                        field={field}
                        options={[
                          { id: "mcqs", title: "MCQS" },
                          { id: "truefalse", title: "True - False" },
                          { id: "shortqa", title: "Short Q and A" },
                          { id: "fillblank", title: "Fill in the Blanks" },
                        ]}
                        label={"Question Type"}
                        placeholder={"Select a Question Type"}
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <SelectOption
                        options={[
                          { id: "english", title: "English" },
                          { id: "urdu", title: "Urdu" },
                        ]}
                        label={"Language"}
                        placeholder={"Select a Language"}
                        field={field}
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="educationLevel"
                  render={({ field }) => (
                    <FormItem>
                      <SelectOption
                        options={[
                          { id: "matric", title: "Metric - O Levels" },
                          { id: "fsc", title: "Inter - A Levels" },
                          { id: "bachalor", title: "Bachalors" },
                          { id: "master", title: "Masters" },
                          { id: "phd", title: "PHD" },
                        ]}
                        label={"Education Level"}
                        placeholder={"Select a Education Level"}
                        field={field}
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="noOfQuestions"
                  render={({ field }) => (
                    <FormItem>
                      <SelectOption
                        options={[
                          { id: "3", title: "3" },
                          { id: "5", title: "5" },
                          { id: "10", title: "10" },
                          { id: "15", title: "15" },
                        ]}
                        label={"No of Questions"}
                        placeholder={"Select a No of Questions"}
                        field={field}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-1">
                <FormField
                  control={form.control}
                  name="textArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter Text here</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[130px]" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Generate Quiz</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </TabsContent>
  );
}
