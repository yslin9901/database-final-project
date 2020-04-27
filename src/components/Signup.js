import React from 'react';
import Form from 'react-bootstrap/Form';

import '../App.css';

function Signup() {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control placeholder="Enter Name" />
          <Form.Text className="text-muted">
            Name should be unique.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Signup;

