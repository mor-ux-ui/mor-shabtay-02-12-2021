import React from 'react'
import { useSelector } from "react-redux";
import StoresTable from './StoresTable'
import {numberWithCommas} from '../../utilities/utilFuncs'

export default function ProductByStore() {

    class Store {
        constructor(id, name, qnt, price) {
            this.id = id;
            this.name = name;
            this.qnt = qnt;
            this.price = price;
        }
    }

    let stores = [];

    let products = useSelector(state => state.allProducts.products)
    let archivedProducts = useSelector(state => state.allProducts.archivedProducts);

    products = products ? products : [];
    archivedProducts = archivedProducts ? archivedProducts : [];

    const allProducts = [...products, ...archivedProducts];
    let sumPrice = 0;
    if(allProducts){
        allProducts.forEach((prod, index) => {
            let crntStore = stores.filter(store => store.name === prod.store)
            if (crntStore.length > 0) {
                crntStore[0].qnt++;
                crntStore[0].price += prod.price;
            }
            else {
                crntStore = new Store(index, prod.store, 1, prod.price)
                stores.push(crntStore);
            }
            sumPrice += prod.price;
        });
    }
    const currency = useSelector(state => state.currency)

    if(currency.currencyValue && !currency.currencyInUsd)
        sumPrice =  sumPrice * currency.currencyValue

    sumPrice = numberWithCommas(sumPrice)
    sumPrice += currency.currencyInUsd ? "$" : "₪";
    return (
        <div className="container">
            <StoresTable
                loading={false}
                error={false}
                stores={stores}
            />
            <div className="total-line">
                <span>{`Total price: ${sumPrice}`}</span>
            </div>
        </div>
    )
}
