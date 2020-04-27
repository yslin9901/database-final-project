import React from 'react';
import NavbarComponent from './NavbarComponent';
import '../App.css';


function Player() {

  return (
    <>
      <NavbarComponent />
      <div className="song-player-container">
        <img src={require('../fake_song.PNG')} alt="song player" />
      </div>
    </>
  );
}
export default Player;