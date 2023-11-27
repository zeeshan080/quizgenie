import { object, string, z } from 'zod';



export const textFormSchema = object({
    questionType: string(),
    language: string(),
    educationLevel: string(),
    noOfQuestions: string(),
    textArea: string(),
});

export type TextFormSchemaType = z.infer<typeof textFormSchema>;
