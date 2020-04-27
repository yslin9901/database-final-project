import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SongInfoForm from './SongInfoForm';
import '../App.css';

function ImportSongModal(props) {

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
      <Button variant="success" onClick={handleShow} className="btn-lg" style={style}>
        新增歌曲至資料庫
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>歌曲詳細資訊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SongInfoForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Button variant="primary" onClick={handleSave}>
            匯入
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ImportSongModal;