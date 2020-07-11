import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { storeAtmosphereType } from '../actions'
import '../App.css';

import Slider from './Slider';

function MomentModal(props) {
  const atmosphereType = useSelector(state => state.atmosphere_type);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();


  const handleClose = () => {
    // reset atmosphere
    dispatch(storeAtmosphereType(''))
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
    console.log(atmosphereType);
  };

  return (
    <div className="modal-button">
      <Button variant="primary" onClick={handleShow} className="btn-lg">
        {props.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Slider title="選擇歌單長度(分鐘)" />
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
export default MomentModal;