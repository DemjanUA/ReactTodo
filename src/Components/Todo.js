import React, { Component } from 'react';
import TodoList from './TodoList'
import Form from './Form';

import './Todo.scss';

class Todo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todoList : [
                {id : 0, title : 'Todo1', completed : false},
                {id : 1, title : 'Todo2', completed : false},
                {id : 2, title : 'Todo3', completed : false}
            ]
        };
        this._id = this.state.todoList.length;

        this.handeleStatusChange = this.handeleStatusChange.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    getNextId() {
        return this._id++; 
    }

    handleAddTodo(title) {
        console.log(title)
        let todos = [...this.state.todoList, {id : this.getNextId(), title, completed : false}];
        console.log(todos)

        this.setState({ todoList : todos });
    }

    handleDeleteTodo(id) {
        let todos = this.state.todoList.filter(e => {
            if (e.id === id) {
                return false;
            }
            return true;
        });

        this.setState({
            todoList : todos
        });
    }

    handeleStatusChange(id) {
        let todos = this.state.todoList.map(e => {
            if (e.id === id) {
                e.completed = !e.completed;
            }
            return e;
        });

        this.setState({
            todoList : todos
        });
    }

    render() {
        let { todoList } = this.state;
        return (
            <div className="todo-wrappeer">
                <div className="header">
                    <h2>React Todo</h2>
                </div>
                <TodoList 
                    list={ todoList }
                    handeleStatusChange={ this.handeleStatusChange }
                    handleDeleteTodo = { this.handleDeleteTodo }
                />
                <Form 
                    handleAddTodo={ this.handleAddTodo }
                />
            </div>
        );
    }
}

export default Todo;