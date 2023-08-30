import React from 'react';
import '../App.css';
import Omelette from '../img/omelette.jpg';
import Pizza from '../img/pizza.jpg';
import Pollo from '../img/pollo.jpg';
import Sanguche from '../img/sanguche.jpg';
import Noquis from '../img/noquis.jpg';
import Ensalada from '../img/ensalada.jpg';

function CardContainer(props) {
  const {imagen, title, description, icono1}=props;
    return (
      <div className="card">
      <div className="card-image">
        <img src={imagen} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-icons">
  <div>{icono1}</div>
  <div>Icono 2</div>
  <div>Icono 3</div>
</div>
      </div>
    </div>
    );
  }
  
  export default CardContainer;