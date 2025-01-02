import React from 'react';

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usrname: props.name,
            person: props.person
        }
    }

    render() {
        return (
           <>
            <h1>The name is: {this.state.usrname}</h1>
            <h1>The name is: {this.state.person.age}</h1>
           </> 
        )
    }
}

export default First;