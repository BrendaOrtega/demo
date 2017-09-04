import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
