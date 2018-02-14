import React from 'react';
import Button from './Button';

import './TodoItem.scss';

function Item(props) {
    return (
        <li className="todo-item clearfix">
            <Button type="check_box_outline_blank"/>
            <span className="title">{ props.title }</span>
            <Button type="delete"/>
        </li>
    );
}

export default Item;