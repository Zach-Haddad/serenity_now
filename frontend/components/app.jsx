import React from 'react';

import Visual from './visual';
import Soundboard from './Soundboard';
import Timer from './Timer';
import Footer from './Footer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div className="app">
        <div id="header">
          <h2 id="title">Serenity Now</h2>
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

        <Footer />

      </div>
    );
  }
}

export default App;
