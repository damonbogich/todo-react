import React from 'react';

export default function TodoForm(props) {
    const handleInput = props.handleInputChange;
    let addItem = props.addItem;
    
    const handleSubmit = e => {
        e.preventDefault();
        if(props.newTask !== "") {
            addItem(props.newTask);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={props.newTask} onChange={(e) => handleInput(e)} type='text' placeholder="add todo" />
            <button>Add To Do</button>
            <button>Clear Completed</button>
        </form>
    )
}