import React from 'react';
import MomentModal from './components/MomentModal';
import SongPreferenceModal from './components/SongPreferenceModal'
import ImportSongModdal from './components/ImportSongModal';
import NavbarComponent from './components/NavbarComponent';
import SearchByArtist from './components/SearchByArtist'
import SearchSong from './components/SearchSong'
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
          <div style={{ fontWeight: 'bold', fontSize: '25px' }}>選擇情境</div>
          <div>&nbsp;</div>
          <div onClick={() => handleClick('jogging')}>
            <MomentModal name="路跑" />
          </div>
          <div onClick={() => handleClick('workout')} >
            <MomentModal name="健身" />
          </div>
          <div onClick={() => handleClick('working')}>
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
        <SearchByArtist />
      </div>
      <div className="homepage-container-2">
        <SongPreferenceModal />
        <SearchSong />
      </div>

    </>
  );
}

export default App;
