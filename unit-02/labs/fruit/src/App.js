import React, { Component } from 'react';
import './App.css';
import FruitTable from './FruitTable.js'

class App extends Component {
  render() {
    return (
      <div>
        <FruitTable list={fruits}/>
      </div>
    );
  }
}

const fruits = [
  ['apple', 'banana', 'cherry'],
  ['grape', 'pear', 'orange'],
  ['plum', 'watermelon', 'canteloupe'],
]
export default App;
