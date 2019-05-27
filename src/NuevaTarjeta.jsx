import React, { Component } from 'react';

export default class NuevaTarjeta extends Component {
	constructor(props) {
		super(props)

		this.state = {
			numeroTarjeta: 'XXXXXXXXXXXXXXXXX'
		}

		this.agregarTarjeta = this.agregarTarjeta.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	agregarTarjeta() {
		this.numeroTarjeta.focus();
	}

	onChange(event) {
		var numeroTarjeta = event.target.value.padEnd(17, 'X')

		this.setState({
			numeroTarjeta
		})
	}

	render() {
		return (
			<div className="Tarjeta">
				<div className="NuevaTarjeta">
					<p className="marcaTarjeta">MOVI</p>
					<p className="numeroTarjeta">
						{this.state.numeroTarjeta.split("").map((a, b) => {
							return (
								<span key={b} className={`item-${b}`}>{a}</span>
							)
						})}
					</p>
				</div>
				<button onClick={this.agregarTarjeta}>Agregar</button>
				<input ref={(input) => { this.numeroTarjeta = input; }} onChange={this.onChange} type="text" className="hidden" />
			</div>
		);
	}
}
