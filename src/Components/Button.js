import React from 'react';

import './Button.scss';

function handleClick(e) {
    
}

function Button(props) {

    return (
        <button className="chackbox icon" onClick={ handleClick }>
            <i className="material-icons">{ props.type }</i>
        </button>
    );
}

export default Button;