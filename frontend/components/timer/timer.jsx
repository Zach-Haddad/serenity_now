import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      mins: "00",
      secs: "00"
    };
  }

  startTimer(){

  }

  render(){
    return(
      <div className="timerContainer">
      </div>
    );

  }
}

export default Timer;
