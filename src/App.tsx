import { Toaster } from "react-hot-toast"

import { TodoList } from "./components/ToDoApp/TodoList"
import {useRef, useState} from 'react';
import { useTodo } from "./context";
import { AddTodo } from "./components/ToDoApp";

const App = () => {
  
    return (
        <>

            <Toaster position="bottom-center"/>
            <AddTodo/>
            <TodoList/>
          
        </>
    )
}

export default App
