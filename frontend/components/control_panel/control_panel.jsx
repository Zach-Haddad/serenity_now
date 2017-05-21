import React from 'react';
import Timer from '../timer/timer';
import SoundBoard from '../sound_board/sound_board';

const ControlPanel = () => (
  <div id="control_panel">
    <SoundBoard />
    <Timer />
  </div>
);

export default ControlPanel;
