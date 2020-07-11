import React from 'react';
import MomentModal from './components/MomentModal';
import ImportSongModdal from './components/ImportSongModal';
import NavbarComponent from './components/NavbarComponent';
import { useDispatch } from 'react-redux'
import { storeAtmosphereType } from './actions'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const handleClick = type => {
    // store atmosphere
    dispatch(storeAtmosphereType(type))
  }

  return (
    <>
      <NavbarComponent />
      <div className="App">
        <ImportSongModdal />
        <div className="moments-container">
          <MomentModal name="路跑" onClick={() => handleClick('run')} />
          <MomentModal name="健身" onClick={() => handleClick('workout')} />
          <MomentModal name="工作" onClick={() => handleClick('work')} />
          <MomentModal name="晚餐" onClick={() => handleClick('dinner')} />
          <MomentModal name="派對" onClick={() => handleClick('party')} />
          <MomentModal name="清晨" onClick={() => handleClick('morning')} />
        </div>
      </div>
    </>
  );
}

export default App;
