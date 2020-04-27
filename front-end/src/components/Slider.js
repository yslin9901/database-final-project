import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();
  const containerStyle = {
    marginBottom: '10px',
  };
  const titleStyle = {
    fontWeight: 'bold',
    marginLeft: '10px'
  };
  const sliderContainerStyle = {
    display: "flex",
    justifyContent: 'center',
    marginLeft: '20%'
  };
  return (
    <div className={classes.root} style={containerStyle}>
      <Typography id="discrete-slider" gutterBottom style={titleStyle}>
        {props.title}
      </Typography>
      <div style={sliderContainerStyle} className="form-group">
        <Slider
          defaultValue={10}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={5}
          marks
          min={5}
          max={60}
          // onChange={handleChange}
        />
      </div>
    </div>
  );
}