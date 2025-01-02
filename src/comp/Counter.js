import React from 'react'

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            isRunning: true
        }
    }

    tick = () => {
        this.setState({count: this.state.count + 1})
    }

    stopTimer = () => {
        clearInterval(this.interval);
        this.setState({ isRunning: false });
    }

    componentDidMount() {
        console.log("Component mounted");
        this.interval = setInterval(this.tick, 1000);
    }

    componentDidUpdate(prevProps, prevStates) {
        console.log("component updated");
    }

    componentWillUnmount() {
        console.log("unmounted");
        clearInterval(this.interval);   
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                {this.state.isRunning && (
                    <button onClick={this.stopTimer}>Stop Timer</button>
                )}
            </>
        )
    }
}

export default Counter