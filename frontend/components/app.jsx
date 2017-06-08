import React from 'react';

import VisualContainer from './visual/visual_container';
import SoundBoardContainer from './sound_board/sound_board_container';
import TimerContainer from './timer/timer_container';

const App = ({analyser}) => (
  <div className="app">
    <div id="header">
      <h2>Serenity Now</h2>
    </div>

    <div id="content">
      <div id="left-pane">
        <VisualContainer analyser={analyser}/>
      </div>

      <div id="right-pane">
        <SoundBoardContainer />
        <TimerContainer />
      </div>
    </div>


    <div id="footer">
      
    </div>

  </div>
);

export default App;
