import React from 'react';
import { useSelector } from 'react-redux'
import {numberWithCommas} from '../../utilities/utilFuncs'

export default function StoreRow({store}) {

    const currency = useSelector(state => state.currency)
    let price = currency.currencyInUsd ? store.price : store.price * currency.currencyValue;

    price = numberWithCommas(price)
    price += currency.currencyInUsd ? "$" : "₪";

    return (
        <div className="row">
            <div className="col">{store.name}</div>
            <div className="col">{store.qnt}</div>
            <div className="col price">{price}</div>
        </div>
    )
}
