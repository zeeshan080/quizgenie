import { object, string, z } from 'zod';



export const textFormSchema = object({
    questionType: string({ required_error: 'Please select a question type' }),
    language: string({ required_error: 'Please select a language' }),
    educationLevel: string({ required_error: 'Please select an education level' }),
    noOfQuestions: string({ required_error: 'Please select number of questions' }),
    textArea: string().min(100,'Min 100 characters allowed').max(1000,'Max 1000 characters allowed'),
});


export type mcqsQuizType = {
    id: string;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
};


export type TextFormSchemaType = z.infer<typeof textFormSchema>;
