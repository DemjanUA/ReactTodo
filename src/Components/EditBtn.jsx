import React from 'react';

import './Button.scss';

function EditBtn(props) {
  const className = (props.className ? props.className + ' ' : '') + 'icon';

  return (
    <button className={ className } onClick={ props.handleClick }>
      <i className="material-icons">{props.isEdit ? 'save' : 'mode_edit'}</i>
    </button>
  );
}

export default EditBtn;