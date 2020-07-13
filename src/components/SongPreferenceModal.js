import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { playlistInfo } from '../actions'
import Button from 'react-bootstrap/Button';
import SongPreference from './SongPreference'

import '../App.css';


function SongPreferenceModal(props) {
  const tempo = useSelector(state => state.tempo)
  const energy = useSelector(state => state.energy)
  const liveness = useSelector(state => state.liveness)
  const duration = useSelector(state => state.playlist_duration);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const handleSave = () => {
    const api = `/api/customize_attributes?tempo=${tempo}&energy=${energy}&liveness=${liveness}&duration=${duration}`
    axios.get(api)
      .then(res => {
        dispatch(playlistInfo(res.data));
      })
      .catch(err => console.log(err))

    setShow(false);
  };

  return (
    <div className="modal-button">
      <Button variant="secondary" onClick={handleShow} className="btn-lg">
        依據歌曲性質建立歌單
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SongPreference />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Link to="/player" onClick={handleSave} className="link" style={{ backgroundColor: '#03a1fc', padding: '8px', borderRadius: '3px' }}>開始播放</Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SongPreferenceModal;