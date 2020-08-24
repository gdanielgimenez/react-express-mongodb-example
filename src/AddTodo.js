import React , {Component} from 'react';

class AddTodo extends Component {
state ={};
//functions
handleChange = (e) =>{
    this.setState({
        content: e.target.value
    })
}
handleSubmit = (e)=>{
    this.props.addTodo(this.state);
}


 render () {
    return(
        <div>
            <form action="/api" method="POST" onSubmit={this.handleSubmit}>
                <label> add new item to the list :</label>
                <input type="text" name="content" onChange={this.handleChange} />
            </form>
        </div>
    )
 }
}

export default AddTodo;