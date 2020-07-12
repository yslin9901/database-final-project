import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../App.css';

function SignupModal(props) {

  let userNameInput = React.createRef(); 
  let passwordInput = React.createRef(); 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    const userName = userNameInput.current.value
    const password = passwordInput.current.value
    if(!userName || !password) {
      alert('請填入使用者名稱與密碼');
      return;
    }
    axios.post('/api/register',
    { username: userName, password: password }
    )
      .then(res => {
        console.log(res.data)
        if(res.data.error === false){
          alert(`Register successfully!`)
        } else {
          alert(res.data.msg)
        }
      }).catch(err => {
        console.log(err);
      })

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
          <Form>
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control required ref={userNameInput} placeholder="Enter Name" />
              <Form.Text className="text-muted">
                Name should be unique.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control required ref={passwordInput} type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
          <Button type="submit" variant="primary" onClick={handleSave}>
              註冊
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SignupModal;
