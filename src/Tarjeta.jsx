import React from 'react';

export default function Tarjeta(props) {
    return(
        <div onClick={props.getSaldo} className="Tarjeta" id={props.numero}>
            <p className="marcaTarjeta">M</p>
            {props.saldo &&
                <p className="saldoTarjeta">{props.saldo.replace(" ", "")}</p>
            }
            <p className="numeroTarjeta">
                {props.numero.split("").map((a, b) => {
                    return (
                        <span key={b} className={`item-${b}`}>{a}</span>
                    )
                })}
            </p>
        </div>
    )
}
