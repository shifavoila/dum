import React, { Component } from 'react';

class State extends Component {
    constructor() {
        super();
        this.state = {
            username: "alex",
            age: 27
        }
    }

    changeColor = () => {
        this.setState({ 
            username: 'adam',
            age: 35
        });
    }

    render() {
        return (
            <>
                <h1>Hi! this is {this.state.username}. I am {this.state.age} years old</h1>
                <button onClick={this.changeColor}>Change</button>
            </>
        )
    }
}

export default State;