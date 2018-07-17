import React from 'react';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render(){
        return(
        <div>
            <div className="todoContainer">
                <input
                    type="checkbox"
                    onChange={() => this.props.toggleComplete(this.props.listIndex,this.props.todoIndex)} 
                    checked={this.props.todo.complete}
                />
                <span>
                    {this.props.todo.todoText}
                </span>
                <button
                    onClick={() => this.props.editingTodo(this.props.listIndex, this.props.todoIndex)}
                >  
                    &#9998;    
                </button>
                <button 
                    onClick={() => this.props.deleteTodo(this.props.listIndex,this.props.todoIndex) }
                >
                    x
                </button>
            </div>  
            <style jsx>
            {`
                span {
                    flex: 3 1 auto;
                }
                .todoContainer {
                    font-size: 14px;
                    display: flex;
                    align-items: flex-start;
                }
            `}
            </style>   
        </div>
            
        )
    }
}


export default Todo;
