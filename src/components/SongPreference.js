import React from "react";
import Form from "react-bootstrap/Form";
import ContinuousSlider from './ContinuousSlider';

import "../App.css";

function SongPreference() {

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <ContinuousSlider title="Tempo" step={1} max={250}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <ContinuousSlider title="Energy" step={0.01} max={1}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <ContinuousSlider title="Liveness" step={0.01} max={1}/>
        </Form.Group>
      </Form>
    </>
  );
}

export default SongPreference;
