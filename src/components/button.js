import React from 'react';
import '../styling/custom_button.css';

const CustomButton = props => {
  const { name, action } = props;
  return <button onClick={() => action()}>{name}</button>;
};

export default CustomButton;
