import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {STORE_USER_NAME} from '../type';

import '../App.css';


// how to get value of FormControl
// https://github.com/react-bootstrap/react-bootstrap/issues/2418

function Login() {
  /* 1. Initialize Ref */
  let userNameInput = React.createRef(); 
  let passwordInput = React.createRef(); 
  axios.defaults.withCredentials = true;

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const getData = () => {
    /* 3. Get Ref Value here */
    const userName = userNameInput.current.value
    const password = passwordInput.current.value
    const getUserInfo = () => {
      const api = 'http://127.0.0.1:5000/userinfo'
      axios
        .get(api, { headers: {'Content-Type': 'text/plain'}})
        .then(res => {
          if(res.data.error){
            console.log(res.data)
          } else {
            const user_name = res.data.data.username
            dispatch({
              type: STORE_USER_NAME,
              payload: {user_name},
            })
          }
        })
        .catch(err => console.log(err));
    }
    axios.post('http://127.0.0.1:5000/login',
      { username: userName, password: password },
      { headers: {'Content-Type': 'text/plain'}}
    )
      .then(res => {
        if(res.data.error === false){
          getUserInfo()
          console.log(res.data)
        } else {
          alert('something wrong')
        }
      }).catch(err => {
        console.log(err);
      })
  }

  let handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div>
      <Form inline onSubmit={handleSubmit}>
        {/* /* 2. Attach Ref to FormControl component */}
        <FormControl ref={userNameInput} type="text" placeholder="帳號" className=" mr-sm-2" />
        <FormControl ref={passwordInput} type="text" placeholder="密碼" className=" mr-sm-2" />
        <Button type="submit" onClick={getData}>登入</Button>
      </Form>
    </div>
  );
}

export default Login;
