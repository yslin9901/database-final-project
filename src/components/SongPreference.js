import React from "react";
import Form from "react-bootstrap/Form";
import ContinuousSlider from './ContinuousSlider';
import Slider from './Slider';
import "../App.css";

function SongPreference() {

  return (
    <>
      <Form>
        <ContinuousSlider title="Tempo" step={1} max={250} />
        <ContinuousSlider title="Energy" step={0.01} max={1} />
        <ContinuousSlider title="Liveness" step={0.01} max={1} />
        <Slider title="選擇歌單長度(分鐘)" />
      </Form>
    </>
  );
}

export default SongPreference;
