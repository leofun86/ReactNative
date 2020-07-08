import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error:null,
      isLoaded:false,
      stock: []
    }
  }

  mostrarStock() {
    fetch("http://localhost/ReactNative/react/stockapp/public/server/stock/mostrar_stock.php")
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            stock: result
          })
        },
        (error) => {
          this.setState({
            error: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, stock } = this.state;
    if (error) {
      return <div>{error}</div>
    } else if (!isLoaded) {
      return (
        <div class="text-center">
          <img src="assets/assets/cargando_gif.gif" style={{width:`${5}%`,marginTop:`${5}%`}} />
        </div>
      )
    } else {
      return {
        
      }
    }
  }

}

export default App;
