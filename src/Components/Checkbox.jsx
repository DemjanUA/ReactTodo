import React from 'react';

import './Button.scss';

function Checkbox(props) {
  return (
    <button className="chackbox icon" onClick={props.handleClick}>
      <i className="material-icons">{props.completed ? 'check_box' : 'check_box_outline_blank'}</i>
    </button>
  );
}

export default Checkbox;