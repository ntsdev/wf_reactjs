import React, { Component } from 'react';
import logo from './logo.svg';
import image1 from './images/banner.jpg';

import './App.css';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
        <img  className="App-banner" src={ image1 } />
           <div className="trasperentblock">
           <h2 className="appheading">Reading Time</h2>
           <span className="textheader">24</span> <br></br>
           <span className="textheader1">Minutes</span>
           </div>
           <div className="sidediv">
           <p>04/12/2018</p>
           <p>Investment</p>
           <p>Insights 2018</p>
           <p>Watch and wait the advantage of patience and positioning</p>
</div>
         </header>
         
      </div>
      
    );
    
  }
}

export default App;
