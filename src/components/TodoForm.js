import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : "");
    const inputRef = useRef(null);
   
      
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

    const changeHandler = (e) => {
        setInput(e.target.value)
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
            <div className="formControl"> 
                <input 
                    type="text" 
                    value={input} 
                    onChange={changeHandler} 
                    placeholder={props.edit ? "update todo ..." : "add new todo ..."}
                    ref={inputRef}
                />
                <button 
                    className={`btn ${props.edit ? "updateTodo" : "addTodo"}`} 
                    type="submit">
                    {props.edit ? "Update" : "Add"}
                </button>
            </div>
        </form>  
     );
};
 
export default TodoForm;