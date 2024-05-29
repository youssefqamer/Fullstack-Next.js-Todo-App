import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
export const todoFormSchema = z.object({
    title: z.string().min(3, {message: "Title must be at least 5 characters.",}).max(30, {
        message: "Title must not be longer than 30 characters.",
      }),
      body:z.string().max(100,{message:`Body must not be longer than 80 characters.`}).optional(),
      completed:z.boolean()
    })
  export  type TodoFormValues = z.infer<typeof todoFormSchema>
