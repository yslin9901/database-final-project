import React from 'react';
import { useSelector } from 'react-redux'
import NavbarComponent from './NavbarComponent';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Player() {
  // get playlist from redux
  const playlist = useSelector(state => state.playlist_info);
  console.log(playlist);

  // fake playlist
  //const playlist = [{artistname: "Tempalay", songname: "そなちね"}, {artistname: "deca joins", songname: "海浪"}];
  var video_list = [];
  
  for(let i=0; i<playlist.length; i++){
    var song=playlist[i].artistname;
    var artist=playlist[i].songname;

    const api_key = 'AIzaSyAVMV_1I1LLP8TmZSrt-p9UbyOmlO_w1DM';
    // var temp = [];
    // get videoId
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
      artist+song
    }&type=video&key=${api_key}`
    )
    .then((res) => res.json())
    .then((data) => {
      var id = data.items[0]["id"]["videoId"]
      console.log(id) // video_id
    }).catch(e => {console.log(e)})
  }

  //var target_url = 'http://www.youtube.com/embed?playlist=cbut2K6zvJY,7iw30sK2UCo,sYV5MTy0v1I';
  var target_url = 'http://www.youtube.com/embed?playlist=';

  // fake video_ID_list
  video_list = ["Aa5onMizfco", "FonjL7DQAUQ"];

  //get playlist_url
  for(let i=0; i<video_list.length; i++){
    target_url = target_url + video_list[i] + ",";
  }

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