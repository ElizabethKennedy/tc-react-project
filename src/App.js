import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'



class App extends Component {
  constructor (props) {
    super(props);
  }

 render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
 }
}


export default App;
