import React from 'react';

import './Button.scss';

function Button(props) {
    return (
        <button className="chackbox icon" onClick={ props.handleClick }>
            <i className="material-icons">{ props.type }</i>
        </button>
    );
}

export default Button;