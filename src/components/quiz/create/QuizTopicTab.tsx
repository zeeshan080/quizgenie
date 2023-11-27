"use client";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectOption from "./SelectOption";

type Props = {
  value: string;
};


export default function QuizTopicTab({ value }: Props) {
  return (
    <TabsContent value={value}>
      <Card>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full m-2">
            <SelectOption
              options={[
                { id: "mcqs", title: "MCQS" },
                { id: "truefalse", title: "True - False" },
                { id: "shortqa", title: "Short Q and A" },
                { id: "fillblank", title: "Fill in the Blanks" },
              ]}
              label={"Question Type"}
              placeholder={"Select a Question Type"}
              field={undefined}
            />
            <SelectOption
              options={[
                { id: "english", title: "English" },
                { id: "urdu", title: "Urdu" },
              ]}
              label={"Language"}
              placeholder={"Select a Language"}
              field={undefined}
            />
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
              field={undefined}
            />

            <SelectOption
              options={[
                { id: "3", title: "3" },
                { id: "5", title: "5" },
                { id: "10", title: "10" },
                { id: "15", title: "15" },
              ]}
              label={"No of Questions"}
              placeholder={"Select a No of Questions"}
              field={undefined}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Enter Topic</Label>
            <Input type="text" placeholder="E.g English" />
            <CardDescription>
              Enter a topic to generate questions from. We'll search the web for
              reliable sources first. For very specific topics, we recommend
              adding your own content in the text input mode instead
            </CardDescription>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Generate Quiz</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
