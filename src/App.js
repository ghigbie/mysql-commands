import React, { Component } from 'react';
import './App.css';

import tableData from './services/dataService.js';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  
  state =  {
    tableData: tableData
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent tableData={this.state.tableData}/>
      </div>
    );
  }
}

export default App;
