import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    return initColor;
  });
  const handleBoxCick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  };
  return <div className="color-box" style={{ backgroundColor: color }} onClick={handleBoxCick}></div>;
}

export default ColorBox;
