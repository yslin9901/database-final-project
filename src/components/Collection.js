import React, {useEffect} from 'react';
import NavbarComponent from './NavbarComponent';
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import '../App.css';

function Collection() {
  let history = useHistory()
  useEffect( () => {
    const api = '/api/logout'
    axios
      .get(api)
      .then(res => {
        if (res.data.error) {
          alert('請先登入')
          // route to home page
          history.replace('/')
        } else {
          alert('logout successfully')
        }
      })
      .catch(err => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
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