import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({todos, onComplete, onEdit, onDelete, onUpdatTodo}) => {
    const [edit, setEdit] = useState({id: null, text:"", isCompleted:false})
    
    const editTodoHandler = (id) => {
        console.log(id)
        onEdit(edit.id)
    }
    const renderTodos = () => {
        if (todos.lenght === 0) return <p>add some todos ...</p>
      
        return todos.map((todo) => {
           return <Todo 
                    key={todo.id} 
                    todo={todo}
                    onComplete={() => onComplete(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onEdit={() => setEdit(todo)}
                    />
        });
    };

    return (
        <div>
            {edit.id 
                ? <TodoForm  submitTodo={editTodoHandler} edit={edit} />
                :renderTodos()}
        </div>
        );
};
 
export default TodoList;