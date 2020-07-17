import React from 'react';
import '../styling/animal_card.css';

const AnimalCard = props => {
  const { name, image } = props;
  return (
    <div className='card'>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default AnimalCard;
