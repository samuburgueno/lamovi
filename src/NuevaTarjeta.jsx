import React, { Component } from 'react';
import Store from 'store';

import Tarjeta from './Tarjeta.jsx'

export default class NuevaTarjeta extends Component {
	constructor(props) {
		super(props)

		this.state = {
			numeroTarjeta: 'XXXXXXXXXXXXXXXXX'
		}

		this.onChange = this.onChange.bind(this)
		this.clickAceptar = this.clickAceptar.bind(this)
		this.clickCancelar = this.clickCancelar.bind(this)
	}

	componentDidMount() {
		this.numeroTarjeta.focus();
		console.log(Store.get('tarjetas'))
	}

	onChange(event) {
		// Limito el ingreso a 17 caracteres.
		if (event.target.value.length < 18) {
			var numeroTarjeta = event.target.value.padEnd(17, 'X')

			this.setState({
				numeroTarjeta
			})
		}
	}

	clickAceptar() {
		// Guardar la tarjeta
		const tarjeta = {
			numero: this.state.numeroTarjeta,
			documento: false
		}

		var tarjetas = Store.get('tarjetas')

		if (tarjetas === undefined) {
			tarjetas = []
		}

		var existe = false
		tarjetas.forEach((tarjeta, key) => {
			if (tarjeta.numero === this.state.numeroTarjeta) {
				existe = !existe
			}
		})

		if (!existe) {
			tarjetas.push(tarjeta)
			Store.set('tarjetas', tarjetas)
		} else {
			alert("La tarjeta ya está guardada")
		}

	}

	clickCancelar() {
		// Cancelar la carga
	}

	render() {
		return (
			<div className="TarjetaWrapper">
				<div onClick={this.cargarNumero} className="Tarjeta">
		            <p className="marcaTarjeta">M</p>
		            <p className="numeroTarjeta">
		                {this.state.numeroTarjeta.split("").map((a, b) => {
		                    return (
		                        <span key={b} className={`item-${b}`}>{a}</span>
		                    )
		                })}
		            </p>
		            <input className="numeroTarjeta" ref={(input) => { this.numeroTarjeta = input; }} onChange={this.onChange} type="text" />
		        </div>
				<div className="botones">
					<input className="btn btn-cancelar" onClick={this.clickCancelar} type="button" value="Cancelar" />
					<input className="btn btn-aceptar" onClick={this.clickAceptar} type="button" value="Aceptar" />
				</div>
			</div>
		);
	}
}

