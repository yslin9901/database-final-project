import React, { useRef, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { playlistInfo } from '../actions'
import { useHistory } from 'react-router-dom';

const SearchByArtist = () => {
  let history = useHistory();
  const [precise, setPrecise] = useState(false)
  const searchByArtistField = useRef(null);
  const dispatch = useDispatch();
  const handleSearch = () => {
    const artist = searchByArtistField.current.value;
    let api = `/api/searchArtist?artist=${artist}`;
    if(precise){
      api += '&mode=precise'
    }
    axios.get(api)
      .then(res => {
        dispatch(playlistInfo(res.data));
        history.replace('/player')
      })
      .catch(err => console.log(err))
  }

  const handlePrecise = () => {
    setPrecise(precise => !precise);
  }
  
  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>利用歌手搜尋</Form.Label>
        <Form.Control ref={searchByArtistField} placeholder="輸入歌手" />
      </Form.Group>
      <Button style={{ marginTop: '15px' }} variant="secondary" onClick={handleSearch}>搜尋</Button>
      <label style={{fontSize: '18px'}}>精準模式</label>
      <input type="checkbox" id="preciseModeCheckbox" onClick={handlePrecise}/>
    </>
  )
}

export default SearchByArtist;