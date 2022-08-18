import React from "react";
//import "./css/launch-card.css";

export const ItemVuelo = ({
  destination,
  day,
  price,
  availability
}) => {
  return (
    <div className="item">
      <div className="itemIcon">
        <img src="/img/icono.webp" alt="" />
      </div>
      <div className="itemData">
        <span>{destination}</span>
        <br />
        <span>{day}</span> - <span>$ {price}.-</span>
        <br />
        <span>{(availability<10?'Ultimos ':'')} {availability} disponibles</span>
        <br />
        <span>Detalles</span>
      </div>
    </div>
  );
};