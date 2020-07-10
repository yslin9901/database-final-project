import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import SignupModal from './SignupModal';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
import { STORE_USER_NAME } from '../type'

function NavbarComponent() {
  const style = {
    marginRight: '10px',
    marginTop: '7px',
    color: 'white'
  }

  axios.defaults.withCredentials = true;
  const user_name = useSelector(state => state.user_name);
  const dispatch = useDispatch()
  useEffect(() => {
    const api = '/api/userinfo'
    axios
      .get(api)
      .then(res => {
        if (res.data.error) {
          console.log(res.data)
        } else {
          const user_name = res.data.data.username
          dispatch({
            type: STORE_USER_NAME,
            payload: { user_name },
          })
        }
      })
      .catch(err => console.log(err));
  });

  let history = useHistory();
  const handleLogout = () => {
    const api = '/api/logout'
    axios
      .get(api)
      .then(res => {
        if (res.data.error) {
          alert(res.data.msg)
        } else {
          alert('logout successfully')
          const user_name = ''
          dispatch({
            type: STORE_USER_NAME,
            payload: { user_name },
          })
          // route to home page
          console.log(history)
          history.replace('/')
        }
      })
      .catch(err => console.log(err));
  }

  let dynamicComponent = user_name
    ? <><Link to="/collection" className="link" style={style}>我的收藏</Link>
      <div style={style}>{`使用者：${user_name}`}</div></>
    : <>
      <SignupModal />
      <Login /></>

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="link" style={style}>首頁</Link>

          {/* <SignupModal />
          <Login /> */}
          {dynamicComponent}
          <div className="logout" style={style} onClick={handleLogout}>登出</div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
