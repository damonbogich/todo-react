import React from 'react';

export default function TodoForm(props) {
    const handleInput = props.handleInputChange;
    let addItem = props.addItem;
    let clear = props.clear;
    
    const handleSubmit = e => {
        e.preventDefault();
        if(props.newTask !== "") {
            addItem();
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={props.newTask} onChange={(e) => handleInput(e)} type='text' placeholder="add todo" />
            <button>Add To Do</button>
            <button onClick={() => clear()}>Clear Completed</button>
        </form>
    )
}