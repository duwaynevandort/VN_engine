import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';
import './TestVN.css';

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
        <TextBox />
        <OptionBox />
      </div>
    );
  }
}

class TextBox extends Component {
  render() {
    return (
      <div className="vn-text-box">
        <p> This is text </p>
      </div>
    );
  }
}

class OptionBox extends Component {
  render() {
    return (
      <div className="vn-option-box">
        <Options />
      </div>
    );
  }
}

class Options extends Component {
    
  constructor(props) {
    super(props);
    this.state = {options: ["Option 1", "Option 2", "Option 3", "Option 4"]};
  }

  render() {

    var options = this.state.options.map(function(option) {          
      return (
        <div key={option}>
          <Link to={`/`}>
            {option}
          </Link>
        </div>
      )
    });

    return (
      <div className="vn-option">
        {options}
      </div>
    );
  }
}

export default App;
