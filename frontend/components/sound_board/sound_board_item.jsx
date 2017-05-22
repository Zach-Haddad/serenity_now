import React from 'react';

class SoundBoardItem extends React.Component{
  constructor(props){
    super(props);

    // <audio
    //     src={this.props.src}
    //     ref={"track${this.props.id}"}
    //     controls='volume-slider'>
    //
    //   </audio>;


    this.state = {
      // audioComponent: audioComponent
      playing: false
    };


    console.log(this.props);
    this.playToggle = this.playToggle.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  playToggle(){
    const audioComponent = document.getElementById('audio1');

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

  // volume slider
  // button - play/pause toggle

  render(){

    return(
      <div className="sound_board_item">
        <button onClick={e => this.playToggle()}></button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          onChange={e => this.setVolume(e)}/>
      </div>

    );
  }
}
// <div className="sound_board_item">
//   {this.state.audioComponent}
// </div>

export default SoundBoardItem;
