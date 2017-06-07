import React from 'react';
import SoundBoardItem from './sound_board_item';
import paths from '../../main.jsx';

class SoundBoard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
    };
  }

  render(){

    const soundList = paths.map((path, i) => (
        <SoundBoardItem
          key={i}
          name={path}
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
