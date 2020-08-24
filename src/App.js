import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos :[
      {id:1, content: 'Buy some milk'},
      {id:2, content: 'Buy tea'}
    ]
  }
//functions
deleteTodo = (id)=>{
  console.log(id);
  const todos = this.state.todos.filter(todo =>{
    return todo.id !== id;
  })
  this.setState({todos});
}
//function to add new item to the list
addTodo = (todo) =>{
 todo.id = this.state.todos.length+1;
  let todos  = [...this.state.todos, todo];
 this.setState({todos});
}



    render () {
      return (
        <div className="App center container">
          <h1 className="center blue-text"> Todos </h1>
          < Todos todos={this.state.todos} deleteTodo ={this.deleteTodo} />
          < AddTodo  addTodo={this.addTodo}/>
        </div>
              );
  }
}
export default App;
