import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TestVN.css';

(<App/>, document.getElementById('app'));
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BackgroundImage/>
      </div>
    );
  }
}

class BackgroundImage extends Component {
  render() {
    return (
      <div className="vn-bg-image">
        <div className="vn-text-box">
          <p> This is text </p>
        </div>
      </div>
    );
  }
}


export default App;
