import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  handleChange = (e) => {
    let title = e.target.value;
    this.props.handleTitileChange(title);
  }

  componentDidMount() {
    this.inputThatShouldBeFocused.focus();
  }

  render () {
    return (
        <p className="edit-inp">
            <label>
              <input
                ref={(input) => this.inputThatShouldBeFocused = input}
                type="text"
                value={ this.props.title }
                onChange={ this.handleChange }
              />
            </label>
        </p>
    );
  }
}

function Text(props) {
  const className = (props.completed ? 'completed ' : '') + 'title'; 

  return (
    <span className={ className }>{ props.title }</span>
  );
}

function TodoTitle(props) {
  return (
    <div>
      { props.isEdit ? <Input { ...props}/> : <Text { ...props}/> }
    </div>
  )
}

export default TodoTitle;