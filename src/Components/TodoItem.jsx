import React, { Component } from 'react';
import Button from './Button';
import EditBtn from './EditBtn';
import Checkbox from './Checkbox';
import TodoTitle from './TodoTitle';

import './TodoItem.scss';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit : false,
            title : props.title
        };
    }

    handleItemStatusChange = () => {
        this.props.handleItemStatusChange(this.props.id)
    }

    handleDeleteTodo = () => {
        this.props.handleDeleteTodo(this.props.id)
    }

    handleEditTodo = () => {
        let { isEdit, title } = this.state;
        isEdit = !isEdit;
        this.setState({ isEdit, title });
    }

    handleTitileChange = (data) => {
        let { isEdit, title } = this.state;
        title = data;
        this.setState({ isEdit, title });
    }
    
    handleSaveTodo = () => {
        if (this.state.title !== '') {
            let isEdit = !this.state.isEdit;
            this.setState({ isEdit });
            let title = this.state.title;
            let id = this.props.id;
            this.props.handleTodosTitleChange(id, title);
        }
    }

    render() {        
        const { completed } = this.props;
        const { title } = this.state;

        return (
            <li className="todo-item clearfix">
                <Checkbox completed={ completed } handleClick={ this.handleItemStatusChange }/>
                <TodoTitle
                    title={ title }
                    completed={ completed }
                    isEdit={ this.state.isEdit }
                    handleTitileChange={ this.handleTitileChange }/>
                <Button className="delete-btn" type="delete" handleClick={ this.handleDeleteTodo }/>
                <EditBtn
                    className="edit-btn"
                    isEdit={ this.state.isEdit }
                    handleClick={ this.state.isEdit ? this.handleSaveTodo : this.handleEditTodo }
                />
            </li>
        );
    }
}

export default TodoItem;