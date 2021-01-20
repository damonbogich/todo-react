import React from 'react';
import TodoList from './components/TodoList';

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
    ]
    }
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
