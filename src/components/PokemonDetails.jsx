import React from 'react';
import { Wrapper } from './PokemonDetails.module.css';

const PokemonDetails = ({ Height, Weight, Stage }) => {
  return (
    <div className={Wrapper}>
      <p>Evolution stage: {Stage}</p>
      <p>Height: {Height}</p>
      <p>Weight: {Weight}</p>
    </div>
  );
};

export default PokemonDetails;
