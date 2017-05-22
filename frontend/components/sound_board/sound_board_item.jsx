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
    };


    console.log(this.props);
  }

  // volume slider
  // button - play/pause toggle

  render(){
    const audioComponent = document.getElementById('audio1');

    return(
      <button onClick={e => audioComponent.play()}></button>
    );
  }
}
// <div className="sound_board_item">
//   {this.state.audioComponent}
// </div>

export default SoundBoardItem;
