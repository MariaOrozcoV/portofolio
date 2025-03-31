import { useState } from 'react'
import './App.css'

function App() {
  
  const [contador, setContador] = useState(0);
  const [esRojo, setEsRojo] = useState(false);

  function cambiarColor() {
    if(esRojo == true) {
      setEsRojo(false);
    } else {
      setEsRojo(true);
    }
  }

  function sumar() {
    setContador(estadoAnterior => estadoAnterior + 1);
  }

  function disminuir(){
    setContador(estadoAnterior => estadoAnterior - 1);

  }

  function MariaRojo() {
    if (esRojo) {
      return <h1 style={{'color': 'red'}}>Maria</h1>
    } else {
      return <h1 className='maria' style={{'font-size': '20px'}}>Maria</h1>;
    }
  }

  return (
    <div>
      <MariaRojo />
      <p>{contador}</p>
      <p>{esRojo}</p>
      <button onClick={sumar}>+</button>
      <button onClick={disminuir}>-</button>
      <button onClick={cambiarColor}>Cambiar</button>
    </div>
  )
}

export default App
