import React, { Component } from 'react';
import TodoList from './TodoList'
import Form from './Form';

import './Todo.scss';

class Todo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todoList : [
                {id : 0, title : 'Todo 1', completed : false},
                {id : 1, title : 'Todo 2', completed : false},
                {id : 2, title : 'Todo 3', completed : false},
                {id : 3, title : 'Todo 4', completed : false}
            ]
        };

        this._id = this.state.todoList.length;
    }

    getNextId() {
        return this._id++; 
    }

    handleAddTodo = (title) => {
        let todos = [...this.state.todoList, {id : this.getNextId(), title, completed : false}];

        this.setState({ todoList : todos });
    }

    handleDeleteTodo = (id) => {
        let todos = this.state.todoList.filter(e => (e.id !== id));

        this.setState({
            todoList : todos
        });
    }

    handleTodosTitleChange = (id, title) => {
        let todos = this.state.todoList.map(e => {
            if (e.id === id) {
                e.title = title;
            }
            return e;
        });

        this.setState({
            todoList : todos
        });
    }

    handeleStatusChange = (id) => {
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
                    handeleStatusChange = { this.handeleStatusChange }
                    handleDeleteTodo = { this.handleDeleteTodo }
                    handleTodosTitleChange = { this.handleTodosTitleChange }
                />
                <Form 
                    handleAddTodo={ this.handleAddTodo }
                />
            </div>
        );
    }
}

export default Todo;