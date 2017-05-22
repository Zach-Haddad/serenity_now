import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  // setup all audio files here; implement load screen if streaming not seemless
  // connect all audio files to audiocontext, analyser
  // that way won't need to hold mutable analyser in immutable state!

  const audios = document.getElementById('audios');
  const audio = document.createElement('audio');
  audio.id = "audio1";
  audio.src = './assets/tracks/white-noise.mp3';
  audios.appendChild(audio);

  console.log(audio);

  ReactDOM.render(<Root store={ store } />, root);
});
