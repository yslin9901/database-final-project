import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import SignupModal from './SignupModal';
import { Link } from 'react-router-dom';
import '../App.css';

function NavbarComponent() {
  const style = {
    marginRight: '10px',
    marginTop: '7px',
    color: 'white   '
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="link" style={style}>首頁</Link>
          <Link to="/favorite" className="link" style={style}>我的收藏</Link>
          <SignupModal />
          <Login />
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
