import React from 'react';

class SoundBoardItem extends React.Component{
  constructor(props){
    super(props);
    const audioComponent =   <audio
        src={this.props.src}
        ref={"track${this.props.id}"}
        controls="true">

      </audio>;

    this.state = {
      audioComponent: audioComponent
    };

    console.log(this.props);
  }

  // volume slider
  // button - play/pause toggle

  render(){
    return(
      <div className="sound_board_item">
        {this.state.audioComponent}
      </div>
    );
  }
}

export default SoundBoardItem;
