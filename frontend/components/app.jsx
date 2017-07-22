import React from 'react';

import Visual from './Visual';
import Soundboard from './Soundboard';
import Timer from './Timer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    console.log("im here");
    return(
      <div className="app">
        <div id="header">
          <h2>Serenity Now</h2>
        </div>

        <div id="content">
          <div id="left-pane">
            <Visual analyser={this.props.analyser}/>
          </div>

          <div id="right-pane">
            <Soundboard />
            <Timer />
          </div>
        </div>


        <div id="footer">

        </div>

      </div>
    );
  }
}

export default App;
