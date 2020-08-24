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
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content:''})
}


 render () {
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label> add new item to the list :</label>
                <input type="text" name="content" onChange={this.handleChange} value ={this.state.content}/>
            </form>
        </div>
    )
 }
}

export default AddTodo;