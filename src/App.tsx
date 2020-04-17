import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './message'

class App extends Component<any> {
  componentWillMount() {
    console.log("almost there ...");
  }

  componentDidMount(){
    console.log("finally hello ...");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Message message='this is a simple message' />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
