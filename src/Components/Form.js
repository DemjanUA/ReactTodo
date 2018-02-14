import React, { Component } from 'react';

import "./Form.scss";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form className="input-todo-form" onSubmit={ this.handleSubmit }>
                <p>
                    <label>
                        <input type="text" />
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