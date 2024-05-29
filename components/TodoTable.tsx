'use client'
import React from 'react'
import {Table,TableBody,TableCaption,TableCell,TableFooter,TableHead,TableHeader,TableRow,
  } from "@/components/ui/table"
  import {Pen,Trash } from "lucide-react";
  import { Button } from "@/components/ui/button";
import { ITodo } from '@/interfaces';
import { Badge } from "@/components/ui/badge"

import TodoTableActions from './TodoTableActions';
 const TodoTable = ({todos}:{todos:ITodo[]}) => {  
  return (
    <>
<Table>
      <TableCaption>A list of your recent Todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
          <TableHead >Completed</TableHead>
          <TableHead className='text-right' >
          Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos?.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>{todo.body}</TableCell>
            <TableCell>
            {todo.completed? <Badge >Completed</Badge>:<Badge variant="secondary">Incompleted</Badge>}
            </TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
       <TodoTableActions todo={todo}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

    </>
  )
}

export default TodoTable