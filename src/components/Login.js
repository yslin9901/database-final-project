import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import '../App.css';

function Login() {
  return (
    <div>
      <Form inline>
        <FormControl type="text" placeholder="帳號" className=" mr-sm-2" />
        <FormControl type="text" placeholder="密碼" className=" mr-sm-2" />
        <Button type="submit">登入</Button>
      </Form>
    </div>
  );
}

export default Login;
