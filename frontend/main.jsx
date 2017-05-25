import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

const cloud = 'http://res.cloudinary.com/zach/video/upload/';



const paths = [

];

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  const audios = document.getElementById('audios');

  // setup audio ctx and analyser node
  const audioCtx = new AudioContext();
  const analyser = audioCtx.createAnalyser();

  let audio;
  const addAudio = function(path, idx){
    audio = document.createElement('audio');
    audio.id = `audio${idx}`;
    audio.src = cloud + path;
    audio.connect(analyser);
    audios.appendChild(audio);
  };

  analyser.connect(audioCtx.destination);

  // setup all audio files here; implement load screen if streaming not seemless
  // connect all audio files to audiocontext, analyser
  // that way won't need to hold mutable analyser in immutable state!

  audio = document.createElement('audio');
  audio.id = "audio1";
  audio.src = cloud + 'v1495476734/white-noise_h3ti4t.mp3';
  audios.appendChild(audio);

  // pass the analyzer and audio + canvas contexts through root to app!

  ReactDOM.render(<Root store={ store } />, root);
});
