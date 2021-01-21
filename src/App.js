import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [{
        task: 'Meditation',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Shop for boots',
        id: 1528817084358,
        completed: false
      },
      {
        task: 'watch warriors game',
        id: 1528817084368,
        completed: false
      }
    ], 
    newTask: ""
    }
  }

  handleItemCompletion = id => {
    let tasks = this.state.tasks;
    //loop through array of tasks to find task that matches id passed in
    //change that tasks completed flag to the opposite of what it is
    tasks.forEach(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
    })
    this.setState(tasks)
    console.log(this.state.tasks)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleItemCompletion={this.handleItemCompletion} tasks={this.state.tasks} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
