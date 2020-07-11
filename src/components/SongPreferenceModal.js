import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from 'react-redux'
import SongPreference from './SongPreference'
import '../App.css';


function SongPreferenceModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    // reset atmosphere
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
  };

  return (
    <div className="modal-button">
      <Button variant="primary" onClick={handleShow} className="btn-lg">
        依據歌曲性質建立歌單
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SongPreference/>
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