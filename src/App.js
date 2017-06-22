import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LendistmartTimeOutIdle from './LendistmartTimeOutIdle';
// import IdleTimer from 'react-idle-timer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <LendistmartTimeOutIdle/>
                </div>
            </div>
        );
    }
}

export default App;
