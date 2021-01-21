import React from 'react';

export default function Todo ({handleItemCompletion, task}) {
    let style = {
        textDecoration: 'line-through'
    }
    
    return (
        <li style={task.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'} } id={task.id} onClick={() => handleItemCompletion(task.id)}>
            {task.task}
        </li>
    )
};