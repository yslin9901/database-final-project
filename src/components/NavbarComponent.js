import React, {useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import SignupModal from './SignupModal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function NavbarComponent() {
  const style = {
    marginRight: '10px',
    marginTop: '7px',
    color: 'white   '
  }

  

  useEffect(() => {
    let api = 'http://127.0.0.1:5000/userinfo'
    axios
      .get(api)
      // {error: true, msg: "Not log in!"}
      .then(res => {
        if(res.data.error){
          console.log(res.data)
        } else {
          console.log(res.data.username)
        }
      })
      .catch(err => console.log(err));
  });
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="link" style={style}>首頁</Link>
          <Link to="/collection" className="link" style={style}>我的收藏</Link>
          <SignupModal />
          <Login />
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
