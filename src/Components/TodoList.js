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
                        <TodoItem 
                            key={ e.id }
                            id={ e.id }
                            title={ e.title }
                            completed = { e.completed }
                            handleItemStatusChange={ props.handeleStatusChange }
                            handleDeleteTodo={ props.handleDeleteTodo }
                        />
                    );
                })
            }
        </ul>
    );
}

export default TodoList;