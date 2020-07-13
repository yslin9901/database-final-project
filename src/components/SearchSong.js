import React, { useRef } from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { playlistInfo } from '../actions'
import { useHistory } from 'react-router-dom';

const SearchSong = () => {
  const searchSongField = useRef(null);
  const dispatch = useDispatch();
  let history = useHistory()
  const handleSearch = () => {
    const song = searchSongField.current.value;
    const api = `/api/searchSong?song=${song}`;
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
  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>搜尋歌曲</Form.Label>
        <Form.Control ref={searchSongField} placeholder="輸入歌曲" />
      </Form.Group>
      <Button style={{ marginTop: '15px' }} variant="secondary" onClick={handleSearch}>搜尋</Button>
    </>
  )
}

export default SearchSong;
