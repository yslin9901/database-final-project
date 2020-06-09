import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import '../App.css';


function Login() {
  let getData = () => {
    console.log('get')
    axios.get('http://127.0.0.1:5000/gapminder/all')
      .then(res => {
        console.log(res);
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
        <FormControl type="text" placeholder="帳號" className=" mr-sm-2" />
        <FormControl type="text" placeholder="密碼" className=" mr-sm-2" />
        <Button type="submit" onClick={() => getData()}>登入</Button>
      </Form>
    </div>
  );
}

export default Login;
