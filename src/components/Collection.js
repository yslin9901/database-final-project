import React from 'react';
import NavbarComponent from './NavbarComponent';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';

function Collection() {

  return (
    <>
      <NavbarComponent />
      <ListGroup>
        <ListGroup.Item>Song 1</ListGroup.Item>
        <ListGroup.Item>Song 2</ListGroup.Item>
        <ListGroup.Item>Song 3</ListGroup.Item>
        <ListGroup.Item>Song 4</ListGroup.Item>
        <ListGroup.Item>Song 5</ListGroup.Item>
      </ListGroup>
    </>
  );
}
export default Collection;