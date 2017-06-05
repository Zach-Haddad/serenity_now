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
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    // this.logAnalyser(this.props);
  }

  logAnalyser(props){
    setInterval(function(){console.log(props.analyser);}, 1000);
  }

  render(){
    return(
      <canvas ref="canvas" width={600} height={400}/>
    );
  }
}

export default Visual;
