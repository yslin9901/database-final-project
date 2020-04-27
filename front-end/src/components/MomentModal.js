import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Router, Route, Link } from 'react-router-dom';
import '../App.css';

import Slider from './Slider';    

function Example(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
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
          <Button variant="primary" onClick={handleSave}>
            <Link to="/player" className="link">開始播放</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Example;