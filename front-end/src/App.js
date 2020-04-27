import React from 'react';
import Moment from './components/Moment'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="moments-container">
        <Moment name="路跑"/>
        <Moment name="健身"/>
        <Moment name="工作"/>
        <Moment name="晚餐"/>
        <Moment name="派對"/>
        <Moment name="清晨"/>
      </div>
    </div>
  );
}

export default App;
