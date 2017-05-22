import React from 'react';

class SoundBoardItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    // create audio
  }

  // volume slider
  // button - play/pause toggle

  render({src}){
    return(
      <div className="sound_board_item">
        <audio>

        </audio>
      </div>
    );
  }
}

export default SoundBoardItem;
