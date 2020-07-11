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
          <div onClick={() => handleClick('run')}>
            <MomentModal name="路跑" />
          </div>
          <div onClick={() => handleClick('workout')} >
            <MomentModal name="健身" />
          </div>
          <div onClick={() => handleClick('work')}>
            <MomentModal name="工作" />
          </div>
          <div onClick={() => handleClick('dinner')}>
            <MomentModal name="晚餐" />
          </div>
          <div onClick={() => handleClick('party')}>
            <MomentModal name="派對" />
          </div>
          <div onClick={() => handleClick('morning')}>
            <MomentModal name="清晨" />
          </div>  
        </div>
      </div>
    </>
  );
}

export default App;
