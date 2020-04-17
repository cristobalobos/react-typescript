import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //let firstValue: string = 'Manny';
    //let firstValue: number = 34;
    // let firstValue: boolean = true;
    // let firstValue: number[] = [2, 3, 56];
    //let firstValue: Array<string> = ['2', '3', 'Manny'];
    
    // tuple
    let aTuple: [string, number] = ['Manny',34]

    // enum
    enum Codes {First = 1, Second = 2 };

    // any
    let firstName: any = 'Manny';

    // void
    const warning = ():void =>{
      console.log('warning')
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            El valor {firstName} es de  {typeof aTuple[0]} type!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
