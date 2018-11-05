import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { ImageStyle, LinkStyle } from './PokemonTeaser.module.css';

const PokemonTeaser = ({ Img, Name, Path = '/' }) => {
  return (
    <Fragment>
      <img src={Img} alt={Name + ' image'} className={ImageStyle} />
      <Link to={Path} className={LinkStyle}>
        <h3>{Name}</h3>
      </Link>
    </Fragment>
  );
};

export default PokemonTeaser;
