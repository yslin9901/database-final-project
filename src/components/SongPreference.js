import React from "react";
import Form from "react-bootstrap/Form";
import Slider from './Slider';

import "../App.css";

function SongPreference() {

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Slider title="Tempo" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Slider title="Energy" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Slider title="Liveness" />
        </Form.Group>
      </Form>
    </>
  );
}

export default SongPreference;
