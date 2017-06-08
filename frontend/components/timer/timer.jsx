import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      minTen: 0,
      minOne: 0,
      secTen: 0,
      secOne: 0,
      timerStarted: false
    };

    this.restartTimer = this.restartTimer.bind(this);
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
      // use css to have timer input fields be within circular canvas clock
      <div className="timerContainer">
        <div className="timerCanvas">
        </div>

        <div className="timerInput">
          <input type="number" min="0" max="9" value={this.state.minTen}></input>
          <input type="number" min="0" max="9" value={this.state.minOne}></input>
          <input type="number" min="0" max="5" value={this.state.secTen}></input>
          <input type="number" min="0" max="9" value={this.state.secOne}></input>
          <button onClick={this.restartTimer}/>
        </div>
      </div>
    );

  }
}

export default Timer;
