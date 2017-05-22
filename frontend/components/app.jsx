import React from 'react';

import VisualContainer from './visual/visual_container';
import SoundBoardContainer from './sound_board/sound_board_container';
import TimerContainer from './timer/timer_container';

const App = () => (
  <div className="app">
    <h2>Testing</h2>

    <VisualContainer />
    <SoundBoardContainer />
    <TimerContainer />

  </div>
);

export default App;
