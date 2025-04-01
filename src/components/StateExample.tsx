import { useState } from 'react'
import './App.css'

function StateExample() {
  
  const [contador, setContador] = useState(0);
  const [esRojo, setEsRojo] = useState(false);
  const [nombre, setNombre] = useState('');

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
      return <h1 className='maria' style={{'fontSize': '20px'}}>Maria</h1>;
    }
  }

  function cambiarNombre(event: React.ChangeEvent<HTMLInputElement>) {
    const nuevoValor = event.target.value;
    console.log(nuevoValor);
    setNombre(nuevoValor);
  }

  function cambiarApellido(event: React.ChangeEvent<HTMLInputElement>) {
    const nuevoValor = event.target.value;
    const span = document.getElementById('apellido');
    if (span) {
      span.innerHTML = nuevoValor;
    }
  }

  return (
    <div>
      <MariaRojo />
      <p>Nombre: {nombre}</p>
      <input type="text" value={nombre} onChange={(e) => cambiarNombre(e)}/>
      <p>Apellido: <span id="apellido"></span> </p>
      <input type="text" onChange={(e) => cambiarApellido(e)}/>
      <p>Contador: {contador}</p>
      <p>{esRojo}</p>
      <button onClick={sumar}>+</button>
      <button onClick={disminuir}>-</button>
      <button onClick={cambiarColor}>Cambiar</button>
    </div>
  )
}

export default StateExample
