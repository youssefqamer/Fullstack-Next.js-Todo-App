"use client";
import React,{useState} from 'react'
import { Button } from "@/components/ui/button";
import {  Plus } from "lucide-react";
import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createToDoListActions } from "@/actions/todoActions";
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { TodoFormValues,todoFormSchema } from "@/validation";
import { Checkbox } from "@/components/ui/checkbox"
import Spinner from './Spinner';

const AddTodoForm = ({userId}:{userId:string|null}) => {
  const [loading,setLoading]=useState(false)
  const [open,setOpen]=useState(false)
    const defaultValues: Partial<TodoFormValues> = {
        title:'',
        body:'',
        completed:false
        
        }
      
        const form = useForm<TodoFormValues>({
          resolver: zodResolver(todoFormSchema),
          defaultValues,
          mode: "onChange",
        })
        const onSubmit=async({title,body,completed}:TodoFormValues)=>{
          setLoading(true)
        await createToDoListActions({title,body,completed,userId})
        setLoading(false)
        setOpen(false)
        }
  return (
    <>
         <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className='ml-auto my-6 '>
      <Button className=' flex'> <Plus size={16} className="mr-1"/> New Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Title</FormLabel>
      <FormControl>
        <Input placeholder="Title" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Short description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
              <FormField
  control={form.control}
  name="completed"
  render={({ field }) => (
    <FormItem>
      <FormControl className='mr-2'>
        <Checkbox onCheckedChange={field.onChange} checked={field.value}  />
      </FormControl>
      <FormLabel>Completed</FormLabel>
      <FormMessage />
    </FormItem>
  )}
/>
           <Button type="submit" disabled={loading}>
            {loading?<Spinner/>:'Add'}
           </Button>
</form>
    </Form>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default AddTodoForm