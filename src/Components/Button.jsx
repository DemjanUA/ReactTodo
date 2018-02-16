import React from 'react';

import './Button.scss';

function Button(props) {
  const className = (props.className ? props.className + ' ' : '') + 'icon';

  return (
    <button className={ className } onClick={ props.handleClick }>
      <i className="material-icons">{ props.type }</i>
    </button>
  );
}

export default Button;