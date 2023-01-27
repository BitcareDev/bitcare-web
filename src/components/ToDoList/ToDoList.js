import React, { useState, useEffect } from "react";
import './ToDoList.css';
import TodoList from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from "uuid";

const List = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, { id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    };
    return(
        <div class="container">
        <div class="add-container">
          <div className="bg-wrapper">
            <div className="bg-wrapper1">
                <div className="head-container">
                <div className="header1">
                    <h1>Todo-list</h1>
                </div>
                <div>
                    <form onSubmit={onFormSubmit}> 
                        <input 
                        type="text1" 
                        placeholder="enter a Todo..." 
                        className="task-input"
                        value={input}
                        required
                        onChange={onInputChange}
                        />
                        <button type="submit" className="add_button">{editTodo ? "OK" : "Add"}</button>
                    </form>
                </div>
                <div>
                    <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
                    
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default List;