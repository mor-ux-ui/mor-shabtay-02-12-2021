import React from 'react';
import { numberWithCommas } from '../../utilities/utilFuncs'
import { useSelector } from 'react-redux'

export default function ProductRow({ product, actionBtn }) {

    const currency = useSelector(state => state.currency)
    let price = product.price

    if (currency.currencyValue && !currency.currencyInUsd)
        price = product.price * currency.currencyValue


    price = numberWithCommas(price)

    price += currency.currencyInUsd ? "$" : "₪";

    return (
        <div className="row">
            <div className="props">
                <div className="prod-ttl">
                    <div className="col prod-ttl-txt">{product.title}</div>
                </div>
                <div className="other-prod-props">
                    <div className="col">{product.store}</div>
                    <div className="col">{product.deliveryEstimatedDate.toISOString().split('T')[0]}</div>
                    <div className="col price">{price}</div>

                </div>
            </div>
            <div className="actions">
                {<button onClick={actionBtn.handler} className="btn archive action-col col">{actionBtn.title}</button>}
            </div>


        </div>
    )
}
