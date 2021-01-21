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

  //1. function to set whatever is typed into the input to the new task in state
  handleInputChange = (e) => {
    this.setState({newTask: e.target.value})
    console.log(this.state.newTask)
  }

  //2. function to add whatever string is being stored in new task to the array of todos
  addItem = () => {
    let newTaskName = this.state.newTask;
    this.setState({
      tasks: [...this.state.tasks, { task: newTaskName, id: Date.now(), completed: false}],
      newTask: ""
    })
  };

  clearCompleted = () => {
    //function will loop through all of the tasks in state and remove any that are completed
    let uncompleteTasks = this.state.tasks.filter((task) => task.completed === false);
    console.log(uncompleteTasks);
    this.setState({
      tasks: uncompleteTasks,
      newTask: this.state.newTask
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleItemCompletion={this.handleItemCompletion} tasks={this.state.tasks} />
        <TodoForm clear={this.clearCompleted} newTask={this.state.newTask} addItem={this.addItem} handleInputChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default App;
