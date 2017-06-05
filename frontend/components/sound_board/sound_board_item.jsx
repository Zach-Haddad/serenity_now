import React from 'react';

class SoundBoardItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      playing: false
    };

    this.playToggle = this.playToggle.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  playToggle(){
    const target = 'audio' + this.props.id;
    const audioComponent = document.getElementById(target);

    this.setState({
      playing: !this.state.playing
    }, () =>
      this.state.playing ? audioComponent.play() : audioComponent.pause()
    );
  }

  setVolume(e){
    const audioComponent = document.getElementById('audio1');
    audioComponent.volume = e.target.value;
  }

  render(){
    // toggle button style on play/pause
    return(
      <div className="sound_board_item">
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


export default SoundBoardItem;
