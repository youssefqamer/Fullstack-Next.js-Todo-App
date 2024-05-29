"use client";
import React,{useState} from 'react'
import { Button } from "@/components/ui/button";
import {  Plus } from "lucide-react";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createToDoListActions, getToDoListActions } from "@/actions/todoActions";
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
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
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
      <FormDescription>This is your public display name.</FormDescription>
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
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
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
        <Checkbox onCheckedChange={field.onChange} checked={field.value} indeterminate={field.value === null} {...field} />

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