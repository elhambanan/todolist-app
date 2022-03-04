import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    // global state : todos
    const [todos, setTodos] = useState([])

    // rule: Handler beside State:
    const addTodoHandler = (input) => {
        // console.log(input)
        const newTodo = {
            id : Math.floor(Math.random() * 1000),
            text: input,
            isCompleted: false,
        };
        setTodos([...todos, newTodo])
    }
    const completeTodo = (id) => {
        //item => findIndex => clone => ..
        const index = todos.findIndex(t => t.id === id)
        // clone: unMutated 
        const selectedTodo = {...todos[index]};
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        console.log(selectedTodo);
        // clone: todos
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    }

    
    const removeTodo = (id) => {
        const filteredTodos = todos.filter((t) => t.id !== id)
        setTodos(filteredTodos)
    }
    const editTodo = (id) => {
         console.log(id)
    }
    return ( 
        <div className = "container">
            <TodoForm  submitTodo={addTodoHandler}/>
            <TodoList 
                todos={todos}
                onComplete={completeTodo}
                onEdit={editTodo}
                onDelete={removeTodo}
                />
        </div>
     );
}
 
export default TodoApp;