import React from 'react';
import { useSelector } from 'react-redux'
import NavbarComponent from './NavbarComponent';
import Button from 'react-bootstrap/Button';
import '../App.css';


function Player() {
  // get playlist from redux
  const playlist = useSelector(state => state.playlist_info);
  console.log(playlist);

  var keyword = "deca joins";
  
  var base_url = 'http://www.youtube.com/embed?listType=search&list=';
  var target_url = base_url + keyword;

  return (
    <>
      <NavbarComponent />
      <div className="song-player-container">
        <iframe title="song_player" id="youriframe" width="640" height="360" src={target_url}></iframe>
        <Button variant="primary" className="btn-lg">加入收藏</Button>
      </div>
      
    </>
  );
}
export default Player;