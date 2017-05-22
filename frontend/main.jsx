import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

// add audio elements to page here;
// connect the sound board element react components

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');


  const audios = document.getElementById('audios');
  const audio = document.createElement('audio');
  audio.id = "audio1";
  audio.src = './assets/tracks/white-noise.mp3';
  // audio.controls = 'true';
  audio.ref = 'audio';
  audios.appendChild(audio);

  console.log(audio);

  ReactDOM.render(<Root store={ store } />, root);
});
