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
  }

  playToggle(){
    const audioComponent = document.getElementById('audio1');

    this.setState({
      playing: !this.state.playing
    },
    () => this.state.playing ? audioComponent.play() : audioComponent.pause());
  }

  // volume slider
  // button - play/pause toggle

  render(){

    return(
      <button onClick={e => this.playToggle()}></button>
    );
  }
}
// <div className="sound_board_item">
//   {this.state.audioComponent}
// </div>

export default SoundBoardItem;
