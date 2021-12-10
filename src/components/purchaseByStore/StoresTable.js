import React from 'react'

import StoreRow from "./StoreRow";

export default function StoresTable({loading, error, stores}) {
    return (
        <div className="store table">
            <div className="flexy th row">
                <div className="col-h">Store</div>
                <div className="col-h">Quantety</div>
                <div className="col-h">Price</div>
            </div>
            {loading && <p>loading...</p>}
            {error && <p>{error.message}</p>}
            {((!stores && !stores) || (stores && stores.length === 0)) && <p>oops.. no stores to show here</p>}
            {stores && stores.sort((a, b) => a.name > b.name ? 1 : -1).map(store => (
                <StoreRow
                    key={store.id}
                    store={store}
                />
            ))}
        </div>
    )
}
