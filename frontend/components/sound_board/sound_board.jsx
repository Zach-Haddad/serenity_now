import React from 'react';
import SoundBoardItem from './sound_board_item';

class SoundBoard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
    };
  }
  // include all tracks here; map over and render as sound board items
  // connect all to analyser node by default


  render(){
    const sounds = [
      {id: 1, name: 'White Noise'},
      {id: 2, src: './assets/tracks/white-noise.mp3'}
    ];

    const soundList = sounds.map(sound => (
        <SoundBoardItem
          key={sound.id}
          id={sound.id}
          name={sound.name}
          />
      )
    );

    return(
      <div className="sound-board">
        {soundList}
      </div>
    );
  }
}

export default SoundBoard;
