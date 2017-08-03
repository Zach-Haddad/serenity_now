import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const cloud = 'http://res.cloudinary.com/zach/video/upload/v1495476734/serenity/';
const paths = ["Birds", "Chimes", "Creek", "Deep Meditation",
                "Heavy Rain", "Light Rain", "Stream", "Thunderstorm",
                "Waves", "White Noise", "Wind"];

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const audios = document.getElementById('audios');

  const audioCtx = new AudioContext();
  const analyser = audioCtx.createAnalyser();

  paths.forEach(function(path){
    let audio = document.createElement('audio');
    audio.crossOrigin = "anonymous";
    audio.id = path;
    audio.src = cloud + path + '.mp3';
    audios.appendChild(audio);
    let source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
  });

  analyser.connect(audioCtx.destination);

  ReactDOM.render(<App analyser={ analyser }/>, root);
});

export default paths;
