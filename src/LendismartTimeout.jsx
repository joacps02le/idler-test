import React from 'react';

var IDLE_TIMEOUT = 15; //seconds
var _idleSecondsCounter = 0;
document.onclick = function() {
    _idleSecondsCounter = 0;
};
document.onmousemove = function() {
    _idleSecondsCounter = 0;
};
document.onkeypress = function() {
    _idleSecondsCounter = 0;
};


class LendismartTimeout extends React.Component{
    constructor(props){
        super(props);
        this.setState.isTimeout= false;
    }
    componentDidMount(){
        window.setInterval(_idleSecondsCounter++, 1000)

        if (_idleSecondsCounter >= IDLE_TIMEOUT) {
            this.setState.timeout= true;
        }
    }

    render(){
        if(!this.state.isTimeout){
            return(
                <div>
                    El tiempo está corriendo
                </div>
            );
        }else{
            <div>
                Se acabó
            </div>
        }


    }
}

export default LendismartTimeout;