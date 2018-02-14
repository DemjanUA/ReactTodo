import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.scss';

function TodoList(props) {
    let { list } = props;
    return (
        <ul className="todo-list">
            {
                list.map(e => {
                    return (
                        <TodoItem key={ e.id } title={ e.title }/>
                    );
                })
            }
        </ul>
    );
}

export default TodoList;