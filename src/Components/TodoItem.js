import React from 'react';
import Button from './Button';

import './TodoItem.scss';

function Item(props) {
    function handleItemStatusChange() {
        props.handleItemStatusChange(props.id)
    }

    function handleDeleteTodo() {
        props.handleDeleteTodo(props.id)
    }

    

    return (
        <li className="todo-item clearfix">
            <Button type={ props.completed ? 'check_box' : 'check_box_outline_blank' } handleClick={ handleItemStatusChange }/>
            <span className={ `title ${ props.completed ? 'completed' : '' }`}>{ props.title }</span>
            <Button type="delete" handleClick={ handleDeleteTodo }/>
        </li>
    );
}

export default Item;