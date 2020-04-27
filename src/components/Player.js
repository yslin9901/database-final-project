import React from 'react';
import NavbarComponent from './NavbarComponent';
import Button from 'react-bootstrap/Button';
import '../App.css';


function Player() {

  return (
    <>
      <NavbarComponent />
      <div className="song-player-container">
        <Button variant="primary" className="btn-lg">加入收藏</Button>
        <img src={require('../fake_song.PNG')} alt="song player" />
      </div>
    </>
  );
}
export default Player;