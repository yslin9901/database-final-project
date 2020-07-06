import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import '../App.css';


// how to get value of FormControl
// https://github.com/react-bootstrap/react-bootstrap/issues/2418

function Login() {
  /* 1. Initialize Ref */
  let userNameInput = React.createRef(); 
  let passwordInput = React.createRef(); 

  let getData = () => {
    /* 3. Get Ref Value here */
    const userName = userNameInput.current.value
    const password = passwordInput.current.value

    // axios.post('http://127.0.0.1:5000/login', { username: userName, password: password })
    //   .then(res => {
    //     console.log(res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    axios.get(`http://127.0.0.1:5000/login?username=${userName}&password=${password}`)
      .then(res => {
        if(res.data.error === false){
          alert(`Hello, ${res.data.data.username}`)
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
        <Button type="submit" onClick={() => getData()}>登入</Button>
      </Form>
    </div>
  );
}

export default Login;
