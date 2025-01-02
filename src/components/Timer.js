import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            seconds: 0,
            isRunning: true
         };
    }

    // method invoked on component mounting through setInterval method
    tick = () => {
        this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
    }

    // method to stop the timer and clear interval
    stopTimer = () => {
        clearInterval(this.interval);
        this.setState({ isRunning: false });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000); // getting unique id returned by setInterval method inorder to close the timer
        console.log("Component inserted");
    }

    componentDidUpdate(prevState, prevProps) {
        console.log("Component updated");
    }

    // executes when component is removed from DOM (App.js)
    componentWillUnmount() {
        this.interval = setInterval(this.tick, 1000);
        console.log("Component Removed");
    }

    render() {
        return (
            <>
                <h1>Seconds: {this.state.seconds}</h1>
                {/* display button only if tiimer is running otherwise display the p tag */}
                {this.state.isRunning ? (
                    <button onClick={this.stopTimer} className='btn btn-primary'>Stop Timer</button>
                ) : (
                    <p>Timer Stopped</p>
                )}
            </>
        )
    }
}

export default Timer;