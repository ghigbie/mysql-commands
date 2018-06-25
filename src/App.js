import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import generalCommands from './services/dataService.js';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Table from './components/Table/Table';

class App extends Component {
  
  state =  {
    generalCommands: generalCommands
  }
  
  render() {
    return (
      <div className="App">
        <Table generalCommands={this.state.generalCommands}/>
      </div>
    );
  }
}

export default App;
