import React from 'react';
import PokemonTeaser from './PokemonTeaser';
import PokemonDetails from './PokemonDetails';
import { AppTag } from './global';
import { getEvolutionStage } from '../util/pokemon';
import { PokemonCardStyle } from './PokemonCard.module.css';

const PokemonCard = ({ Item, style }) => {
  if (!Item) return null;
  const path = `/pokemon/${Item.num}`;

  return (
    <div style={style} className={PokemonCardStyle}>
      <PokemonTeaser Img={Item.img} Name={Item.name} Path={path} />
      <hr />
      <div>
        {Item.type.map(type => (
          <AppTag key={type} Txt={type} />
        ))}
      </div>
      <PokemonDetails
        Height={Item.height}
        Weight={Item.weight}
        Stage={getEvolutionStage(Item)}
      />
    </div>
  );
};

export default PokemonCard;
