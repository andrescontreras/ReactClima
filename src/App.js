import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    console.log(ciudad);
    const consultarAPI = async () => {
      if (consultar) {
        const appID = '8d3c9efa4e5111fb4c8021f542779dff';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
        console.log(resultado);

        if (resultado.cod === '404') {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarAPI();
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="Sin resutlados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <Fragment>
      <h1>Clima React</h1>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              {' '}
              <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} guardarConsultar={guardarConsultar} />
            </div>
            <div className="col  m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
