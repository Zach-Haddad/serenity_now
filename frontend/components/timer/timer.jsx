import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      mins: "00",
      secs: "00",
      timerStarted: false
    };
  }

  startTimer(){

  }

  increment(){

  }

  decrement(){

  }

  //  preview:
  //  ^ ^   ^ ^
  //  0 0 : 0 0
  //  V V   V V
  //   Start/Stop Toggle

  render(){
    return(
      <div className="timerContainer">
      </div>
    );

  }
}

export default Timer;
