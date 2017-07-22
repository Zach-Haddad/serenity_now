import React from 'react';

class SoundboardItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      playing: false
    };

    this.playToggle = this.playToggle.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  playToggle(){
    const audioComponent = document.getElementById(this.props.name);

    this.setState({
      playing: !this.state.playing
    }, () =>
      this.state.playing ? audioComponent.play() : audioComponent.pause()
    );
  }

  setVolume(e){
    const audioComponent = document.getElementById(this.props.name);
    audioComponent.volume = e.target.value;
  }

  render(){
    // toggle button style on play/pause
    return(
      <div className="sound-board-item">
        <button onClick={e => this.playToggle()}>{this.props.name}</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={e => this.setVolume(e)}/>
      </div>

    );
  }
}


export default SoundboardItem;
