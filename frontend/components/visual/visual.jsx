import React from 'react';

class Visual extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    return(
      <canvas ref="canvas" width={600} height={400}/>
    );
  }
}

export default Visual;
