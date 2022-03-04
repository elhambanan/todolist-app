import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = (props) => {
    const [input, setInput] = useState("");
    const [addTodo, setAddTodo] = useState("");
    
    const changeHandler = (e) => {
        setInput(e.target.value)
    }
    const addHandler = () => {
        console.log("add") 
        setAddTodo()
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(!input){
            alert("Enter todo...");
            return
        }
        // add input todo to todos list 
        props.submitTodo(input);
        setInput("");
    }
    return ( 
        <form onSubmit={submitHandler}>
            {props.edit ? (
                <>
                    <input type="text" value={input} onChange={changeHandler} placeholder="edit todo"/>
                    <button type="submit" onClick={addHandler}>Edit</button>
                </>
            ) : (
                <>
                    <input type="text" value={input} onChange={changeHandler} placeholder="add todo"/>
                    <button type="submit" onClick={addHandler}>Add</button>
                </>
            )}
        </form>  
     );
}
 
export default TodoForm;