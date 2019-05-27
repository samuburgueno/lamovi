import React, { Component } from 'react';
import Store from 'store'

import NuevaTarjeta from './NuevaTarjeta.jsx'
import Tarjeta from './Tarjeta.jsx'

export default class Tarjetas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tarjetas: []
        }

        this.getSaldo = this.getSaldo.bind(this)
    }

    componentDidMount() {
        const tarjetas = Store.get('tarjetas')

        this.setState({
            tarjetas
        });
    }

    async getSaldo(event) {
        const tarjetaID = event.target.id

        const resp = await fetch(`http://lamoviapi.estudioliberata.com?tarjeta=${tarjetaID}`)
        const data = await resp.json()

        var tarjetas = this.state.tarjetas
        this.state.tarjetas.forEach((tarjeta, key) => {
            if (tarjetaID === tarjeta.numero) {
                tarjeta.saldo = data.saldo
                tarjeta.fecha = data.fecha

                tarjetas[key] = tarjeta
            }
        })

        this.setState({
            tarjetas
        })
    }

    render() {
        return (
            <div className="Tarjetas">
                <h2>Tarjetas</h2>

                {!this.state.tarjetas &&
                    <NuevaTarjeta />
                }

                {this.state.tarjetas && this.state.tarjetas.map((tarjeta, key) => {
                        return(
                            <Tarjeta key={key} getSaldo={this.getSaldo} {...tarjeta} />
                        )
                    })
                }
            </div>
        );
    }
}
