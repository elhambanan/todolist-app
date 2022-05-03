import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    // global state : todos
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedOption, setSelectedOption] = useState("All");

    useEffect(()=>{
        filterTodos(selectedOption.value)
    },[todos, selectedOption])

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
    const editTodo = (id, newValue) => {
        const index = todos.findIndex(t => t.id === id)
        const selectedTodo = {...todos[index]};
        selectedTodo.text = newValue;
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    }
    const statusHandler = (e) => {
        console.log(e)
        setSelectedOption(e)
        filterTodos(e.value)
    }
    const filterTodos = (status) => {
        switch (status) {
            // case "All":
            //     setFilteredTodos(todos);
            //     break;
            case "Completed":
                setFilteredTodos(todos.filter((t) => t.isCompleted));
                break;
            case "Uncompleted":
                setFilteredTodos(todos.filter((t) => !t.isCompleted));
                break;       
            default:
                setFilteredTodos(todos);    
        }
    }
    return ( 
        <div className = "container">
            <NavBar 
                unCompletedTodos={todos.filter(t => !t.isCompleted).length}
                filterTodos={filterTodos}
                selectedOption={selectedOption}
                onChange={statusHandler}
                className="navbar"
            />
            <TodoForm  submitTodo={addTodoHandler}/>
            <TodoList 
                todos={filteredTodos}
                onComplete={completeTodo}
                onDelete={removeTodo}
                onEdit={editTodo}
            />
        </div>
     );
}
 
export default TodoApp;