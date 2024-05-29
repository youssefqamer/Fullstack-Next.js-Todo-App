import React from 'react'
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from '@/components/TodoTable';
import { getToDoListActions } from '@/actions/todoActions';
import { auth } from '@clerk/nextjs';
export default async  function  Home() {
  const {userId}=auth()
  const todo =await getToDoListActions({userId})
  return (
    <main className="container">
     <AddTodoForm userId={userId}/>
     <TodoTable todos={todo}/>
    </main>
  );
}
