import React from 'react';

class Visual extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };

    // analyser held in props
    this.logAnalyser = this.logAnalyser.bind(this);
  }

  componentDidMount(){
    console.log(this.props.analyser);
    this.renderVisual();
  }

  renderVisual(){
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    let analyser = this.props.analyser;

    let freqData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(freqData);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#9933ff';

    // rudimentary bars for now; insert advanced visual logic here
    let bars = 1000;
    for (var i = 0; i < bars; i++) {
      let barXCoord = i * 3;
      let barWidth = 1;
      let barHeight = -(freqData[i] / 0.8);
      ctx.fillRect(barXCoord, canvas.height, barWidth, barHeight);
    }
    requestAnimationFrame(this.renderVisual.bind(this));
  }



  logAnalyser(props){
    setInterval(function(){console.log(props.analyser);}, 1000);
  }

  render(){
    console.log(this.props.analyser);
    return(
      <canvas ref="canvas" width={1000} height={400}/>
    );
  }
}

export default Visual;
