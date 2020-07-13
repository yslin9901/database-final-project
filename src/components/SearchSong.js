import React, { useRef, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { playlistInfo } from '../actions'
import { useHistory } from 'react-router-dom';

const SearchSong = () => {
  const [precise, setPrecise] = useState(false)
  const searchSongField = useRef(null);
  const dispatch = useDispatch();
  let history = useHistory()
  const handleSearch = () => {
    const song = searchSongField.current.value;
    let api = `/api/searchSong?song=${song}`;
    if(precise){
      api += '&mode=precise'
    }
    console.log(api)
    axios.get(api)
      .then(res => {
        dispatch(playlistInfo(res.data));
        history.replace('/player')
        const artist = res.data[0].artistname.replace('[\'', '').replace('\']', '')
        const song_name = res.data[0].songname;
        alert(`歌曲：${song_name}，歌手：${artist}`)
      })
      .catch(err => console.log(err))
  }

  const handlePrecise = () => {
    setPrecise(precise => !precise);
  }

  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>搜尋歌曲</Form.Label>
        <Form.Control ref={searchSongField} placeholder="輸入歌曲" />
      </Form.Group>
      <Button style={{ marginTop: '15px' }} variant="secondary" onClick={handleSearch}>搜尋</Button>
      <label style={{fontSize: '18px'}}>精準模式</label>
      <input type="checkbox" id="preciseModeCheckbox" onClick={handlePrecise}/>
    </>
  )
}

export default SearchSong;
