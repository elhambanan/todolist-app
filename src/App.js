import React from "react";
import TodoApp from "./components/TodoApp";
import "./App.css";

const App = () => {
    return ( 
        <div className = "App">
            <h1>ToDoList by React</h1>
            <TodoApp />
        </div>
     );
}
 
export default App;