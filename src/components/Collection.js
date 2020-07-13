import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import '../App.css';

function Collection() {
  const userName = useSelector(state => state.user_name);
  const [savedSongsInfo, setSavedSongsInfo] = useState([])
  let history = useHistory()
  useEffect(() => {
    const api = '/api/userinfo'
    axios
      .get(api)
      .then(res => {
        if (res.data.error) {
          alert('請先登入')
          // route to home page
          history.replace('/')
        } else {
          axios.get(`/api/playSaved?user=${userName}`)
            .then(res => {
              setSavedSongsInfo(res.data)
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })
  return (
    <>
      <NavbarComponent />
      <ListGroup>
        {savedSongsInfo.map(songInfo => {
          const { artistname, songname } = songInfo;
          return (
            <ListGroup.Item
              key={songname}
            >{songname + ' by ' + artistname}</ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}
export default Collection;