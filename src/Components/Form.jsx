import React, { Component } from 'react';

import "./Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : ''
    };
  }
    
  handleSubmit = (e) => {
    let title = this.state.title;
    if (title) {
      this.props.handleAddTodo(title);
    }
    title = '';

    this.setState({ title });

    e.preventDefault();
  }

  handleChange = (e) => {
    var title = e.target.value;

    this.setState({ title });
  }

  render() {
    return (
      <form className="input-todo-form" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <input
              type="text"
              value={this.state.title}
              placeholder="What do you wanna do?"
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            <input type="submit" value="Add Todo" />
          </label>
        </p>
      </form>
    );
  }
}

export default Form;