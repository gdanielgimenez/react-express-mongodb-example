import React from 'react';

const Todos =({todos, deleteTodo})=> {
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo._id}>
                     <span > {todo.content}</span>
                     <span>                              </span>
                     <button className='btn-floating btn-small red right' onClick ={ ()=> {deleteTodo(todo._id)}}> X </button>
                </div>
            )
        })
    ):(
        <p className="blue-text center" > You have no todos</p>
    )

    return (
        <div className="todos collection" >
            {todoList}
        </div>
    )
}

export default Todos;