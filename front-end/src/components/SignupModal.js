import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Signup from './Signup';
import '../App.css';

function SignupModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
  };
  const style = {
    marginRight: '30px',
    color: 'white'
  }

  return (
    <div className="modal-button">
      <Button variant="Secondary" onClick={handleShow} className="btn" style={style}>
        註冊
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>註冊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Button variant="primary" onClick={handleSave}>
            註冊
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SignupModal;