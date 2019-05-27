import React, { Component } from 'react';

import NuevaTarjeta from './NuevaTarjeta';

import './App.css';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saldo: false,
      ultimoViaje: false,
      tarjeta: false
    }
  }

  async componentDidMount() {
    // const resp = await fetch('http://lamoviapi.estudioliberata.com')  
    // const data = await resp.json()

    // this.setState({
    //   saldo: data.saldo,
    //   ultimoViaje: data.fecha,
    //   tarjeta: data.tarjeta 
    // });
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <NuevaTarjeta />
            {this.state.saldo &&
              <p>Saldo: {this.state.saldo}</p>
            }
          </header>
        </div>
      );
  }
}

export default App;