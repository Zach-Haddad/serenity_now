import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      mins: "00",
      secs: "00",
      timerStarted: false
    };

    this.restartTimer = this.restartTimer.bind(this);
  }

  startTimer(){

  }

  setUnit(){

  }

  increment(){

  }

  decrement(){

  }

  //  preview:
  //  ^ ^   ^ ^
  //  0 0 : 0 0
  //  V V   V V
  //   Start/Pause    Restart

  restartTimer(){
    this.setState({minTen: 0, minOne: 0, secTen: 0,
                   secOne: 0, timerStarted: false});
  }

  startCounter(){

  }

  pauseCounter(){

  }

  render(){

    return(
      <div className="timerContainer">
        <div className="timerCanvas">
        </div>

        <div className="timerInput">
          <input type="number" min="0" max="99" value={this.state.mins}></input>
          :
          <input type="number" min="0" max="59" value={this.state.secs}></input>
          <button onClick={this.restartTimer}/>
        </div>
      </div>
    );

  }
}

export default Timer;
