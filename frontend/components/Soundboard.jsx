import React from 'react';
import SoundboardItem from './SoundboardItem';
import paths from '../main.jsx';

class Soundboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const soundList = paths.map((path, i) => (
        <SoundboardItem
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

export default Soundboard;
