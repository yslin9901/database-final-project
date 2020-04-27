import React from 'react';
import MomentModal from './components/MomentModal';
import ImportSongModdal from './components/ImportSongModal';
import NavbarComponent from './components/NavbarComponent';
import './App.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="App">
        <ImportSongModdal />
        <div className="moments-container">
          <MomentModal name="路跑" />
          <MomentModal name="健身" />
          <MomentModal name="工作" />
          <MomentModal name="晚餐" />
          <MomentModal name="派對" />
          <MomentModal name="清晨" />
        </div>
      </div>
    </>
  );
}

export default App;
