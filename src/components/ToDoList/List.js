import React from "react";
import { AiFillCheckCircle, AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        );
    }
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const submit = ({ todo }) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => handleDelete(todo)
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
    }
    const showModal = () => {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };
    
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text1"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <AiFillCheckCircle />
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <FaRegEdit />
                        </button>
                        <button className="button-delete task-button" onClick={submit}>
                            <AiOutlineDelete />
                        </button>
                    </div>
                            {/* <Modal show={isOpen} onHide={hideModal}>
                                <Modal.Header>
                                    <Modal.Title>Delete Notes</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you sure you want to delete your Notes?</Modal.Body>
                                <Modal.Footer>
                                    <button type="button" onClick={hideModal}>Cancel</button>
                                    <button type="button" onClick={() => handleDelete(todo)}>Delete</button>
                                </Modal.Footer>
                            </Modal> */}
                </li>
                
            ))}
            
        </div>
        
    );
}

export default TodoList;