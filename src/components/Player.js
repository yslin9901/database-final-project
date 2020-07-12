import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import NavbarComponent from './NavbarComponent';
import Button from 'react-bootstrap/Button';
import config from '../config';
import '../App.css';

function Player() {

  const [videoList, setVideoList] = useState([]);

  // get playlist from redux
  const playlist = useSelector(state => state.playlist_info);
  console.log(playlist);

  // fake playlist
  // const playlist = [{artistname: "Tempalay", songname: "そなちね"}, {artistname: "deca joins", songname: "海浪"}];

  useEffect(() => {
    for(let i=0; i<playlist.length; i++){
      let song=playlist[i].artistname;
      let artist=playlist[i].songname;
      // get videoId
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
        artist+song
      }&type=video&key=${config.api_key}`
      )
      .then((res) => res.json())
      .then((data) => {
        let id = data.items[0]["id"]["videoId"]
        setVideoList((videoList) => [...videoList, id])
      }).catch(e => {console.log(e)})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  console.log('video list = ', videoList)

  var target_url = 'http://www.youtube.com/embed?playlist=';

  // fake video_ID_list
  // video_list = ["Aa5onMizfco", "FonjL7DQAUQ"];

  //get playlist_url
  for(let i=0; i<videoList.length; i++){
    target_url = target_url + videoList[i] + ",";
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