import React from 'react';

export default function TodoForm(props) {
    return (
        <form>
            <input type='text' placeholder="add todo" />
            <button>Add To Do</button>
            <button>Clear Completed</button>
        </form>
    )
}