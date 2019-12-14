import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const {  name, sprite, type,height,weight,move } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>Name :{name}</h1>
        <p className="data-char">Height: {height}</p>
        <p className="data-char">Weight: {weight}</p>
        <p className="data-char">Type: {type}</p>
        <p className="data-char">Moves: {move}</p>
        
      </div>
    </section>
  )
}

/*
this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name;
    this.height = data.height;    
    this.weight = data.weight;    
    this.stat = data.stats[0].max_change;
  }
  */
export default DetailView;