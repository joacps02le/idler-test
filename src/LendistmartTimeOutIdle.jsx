import React from 'react';

class LendistmartTimeOutIdle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: 10, IDLE_TIMEOUT: 10, idleSecondsCounter: 0};
        this.tick = this.tick.bind(this);
        this.handle_onclick = this.handle_onclick.bind(this);
        this.handle_onmouseover = this.handle_onmouseover.bind(this);
        this.handle_onkeypress = this.handle_onkeypress.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handle_onclick() {
        this.setState({
            idleSecondsCounter: 0
        });
    }

    handle_onmouseover() {
        this.setState({
            idleSecondsCounter: 0
        });
    }

    handle_onkeypress() {
        this.setState({
            idleSecondsCounter: 0
        });
    }

    tick() {
        debugger
        this.state.idleSecondsCounter++;
        document.body.addEventListener('click', this.handle_onclick);
        document.body.addEventListener('mouseover', this.handle_onmouseover);
        document.body.addEventListener('keypress', this.handle_onkeypress);
        this.setState({
            date: this.state.IDLE_TIMEOUT - this.state.idleSecondsCounter
        });

        if (this.state.idleSecondsCounter >= this.state.IDLE_TIMEOUT) {
            alert("Time expired!");
            clearInterval(this.timerID);
        }

    }

    render() {
        return (
            <div>
                <h0>Hello, world!</h0>
                <h0>It is {this.state.date}</h0>
            </div>

        );
    }
}
export default LendistmartTimeOutIdle;