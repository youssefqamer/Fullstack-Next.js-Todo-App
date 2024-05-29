import React,{useState} from 'react'
import {Pen,Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {deleteToDoListActions} from '@/actions/todoActions'
import Spinner from './Spinner';
import EditTodo from './EditTodo';
import { ITodo } from '@/interfaces';
const TodoTableActions = ({todo}:{todo:ITodo}) => {
    const [loading,setLoading]=useState(false)
  return (
    <>
    {/* the EditTodo component will display the pen icon and when i click on,it will display the Edit Dialog  */}
    <EditTodo todo={todo}/>
            {' '}
           <Button size={'icon'} variant={'destructive'} onClick={async()=>{
            setLoading(true)
            await deleteToDoListActions({id:todo?.id})
            setLoading(false)
           }}>
            {loading?<Spinner/>:<Trash size={14}/>}
           </Button>
    </>
  )
}

export default TodoTableActions