import { useState } from 'react';
import './App.css';
import { GetVuelos } from './components/Vuelos';

//import { LaunchesDetailed } from "./components/LaunchesDetailed";

function App() {
  const [precioDesde, setPrecioDesde] = useState('');
  const [precioHasta, setPrecioHasta] = useState('');
  const [busco, setBusco] = useState(false);
  return (
    <div className="App">
      <h1 className="title">FlyBondi</h1>
      <div className='Banner'>
        <img src="/img/banner-avion.webp" alt='' />
      </div>
      <div className="contentFiltro">
        <div className='Filtro'>
          <h3>Ofertas por rango de precios</h3>
          <div>
            <span>Precio desde:</span>
            <input type="number" name="precioDesde" value={precioDesde} onChange={(e)=>setPrecioDesde(e.target.value)} />
            <span>hasta:</span>
            <input type="number" name="precioHasta" value={precioHasta} onChange={(e)=>setPrecioHasta(e.target.value)} />
            <input type="button" value="Buscar" onClick={()=>setBusco(true)}  />
          </div>
        </div>
      </div>
      <div className='Resultados'>{busco?<GetVuelos 
      precioDesde={precioDesde}
      precioHasta={precioHasta}
        />:''}</div>
    </div>
  );
  
}

export default App;
