import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    try {
      const resp = await fetch('http://etr.gob.ar/ajax/getEncryptCuantoTengo_express.php', {
          method: 'post',
          credentials: 'include',
          body: JSON.stringify({numTarjeta: '345678987654'})
      });
      const data = await resp.json()
      console.log(data)
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
