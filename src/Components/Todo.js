import React, { Component } from 'react';
import TodoList from './TodoList'
import Form from './Form';

import './Todo.scss';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : [
                {id : 1, title : 'Todo1'},
                {id : 2, title : 'Todo2'},
                {id : 3, title : 'Todo3'}
            ]
        };
    }

    handleAddTodo() {

    }

    handleDeleteTodo() {

    }

    handeleCompleteTodo() {
        
    }

    render() {
        let { todoList } = this.state;
        return (
            <div className="todo-wrappeer">
                <div className="header">
                    <h2>React Todo</h2>
                </div>
                <TodoList list={ todoList }/>
                <Form />
            </div>
        );
    }
}

export default Todo;