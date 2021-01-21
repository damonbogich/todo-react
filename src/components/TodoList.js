// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList ({handleItemCompletion, tasks}) {
  
    return (
        <div>
            to do list component where todos will be generated
            <ul>
            {tasks.map((task) => {
                return <Todo handleItemCompletion={handleItemCompletion} key={task.id} task={task}/>
            })}
            </ul>
        </div>
    )
}