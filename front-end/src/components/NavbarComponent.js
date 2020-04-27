import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">首頁</Nav.Link>
          <Nav.Link href="#favorite">收藏</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
