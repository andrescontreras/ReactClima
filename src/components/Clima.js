import React, { useState } from 'react';
const Clima = ({ resultado }) => {
  const { name, main } = resultado;

  const kelvin = 273.15;

  if (!name) return null;
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es :</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Maxima:
          {parseFloat(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Minima:
          {parseFloat(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Clima;
