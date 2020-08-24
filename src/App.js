import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos :[''
    ]
  }
   //fetch data from our api
   componentDidMount(){
    fetch('/api')
    .then( res => res.json())
    .then(todos => this.setState({todos}, ()=> console.log(todos)));
 }
//functions
deleteTodo = (_id)=>{
  const todos = this.state.todos.filter(todo =>{
    return todo._id !== _id;
  })
  //fetch to delete from data base
  fetch('/'+_id, {
    method: 'DELETE'
  })
  .then((data)=>{console.log('removed from the database')})
  .catch(err=> console.log(err));
  //setting the updated state
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
