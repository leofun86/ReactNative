import React from 'react';
import './App.css';

let info = [];
const data = () => {
  fetch("http://localhost/ReactNative/react/stockapp/public/server/stock/mostrar_stock.php")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        info=result;
      },
      // Nota: es importante manejar errores aquí y no en 
      // un bloque catch() para que no interceptemos errores
      // de errores reales en los componentes.
      (error) => {
        console.log(`Error: ${error}`)  
      });
}
const list = (
  <div>
    <ul>
      {info.map(result=><li>{result.id}</li>)}
    </ul>
  </div>
)



function App() {
  return (
    list,
    data()
    
  );
}

export default App;
