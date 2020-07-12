import React from 'react';
import { useSelector } from 'react-redux'
import NavbarComponent from './NavbarComponent';
import Button from 'react-bootstrap/Button';
import '../App.css';


function Player() {
  // get playlist from redux
    //const playlist = useSelector(state => state.playlist_info);
  //console.log(playlist);

  // fake playlist
  const playlist = [{artistname: "Tempalay", songname: "そなちね"}, {artistname: "deca joins", songname: "海浪"}];
  var video_list = [];
  
  for(var i=0; i<playlist.length; i++){
    var song=playlist[i].artistname;
    var artist=playlist[i].songname;
    console.log(song);
    console.log(artist);
    //get videoId
    axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyACXMpIuPD38LSqpHeXr8nY9kj8cR54vEg',
    {
    params: {
    part: 'snippet',
    q: artist+song,
    type: 'video'
    }
    })
    .then(res => {
      var id = res.data.items[0]["id"]["videoId"]
      console.log(id) //video id
      //video_list.push(id) //failed to push it
    }).catch(e => {console.log(e)})
  }
  
  //console.log(video_id); //failed


  //var target_url = 'http://www.youtube.com/embed?playlist=cbut2K6zvJY,7iw30sK2UCo,sYV5MTy0v1I';
  var target_url = 'http://www.youtube.com/embed?playlist=';

  video_list = ["Aa5onMizfco", "FonjL7DQAUQ"]; //fake_list
  for(var i=0; i<video_list.length; i++){
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