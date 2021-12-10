import React from 'react'

import ProductRow from "./ProductRow";

export default function ProductTable({ loading, error, products, actionBtn }) {
    return (
        <div className="product table">
            <div className="flexy th row">
                <div className="props">
                    <div className="prod-ttl">
                        <div className="col-h">Title</div>
                    </div>
                    <div className="other-prod-props">
                        <div className="col-h">Store</div>
                        <div className="col-h">Delivery estimated date</div>
                        <div className="col-h">Price</div>
                    </div>

                </div>
                <div className="actions">
                    <div className="col-h action-col"></div>
                </div>

            </div>
            {loading && <p>loading...</p>}
            {error && <p className="error-text">{error.message}</p>}
            {((!error && !loading) && (products && products.length === 0)) && <p>oops.. no products to show here</p>}
            {products && products.sort((a, b) => a.deliveryEstimatedDate < b.deliveryEstimatedDate ? 1 : -1).map(prod => (
                <ProductRow
                    key={prod.id}
                    product={prod}
                    actionBtn={{ title: actionBtn.title, handler: () => { actionBtn.handler(prod) } }}
                />
            ))}
        </div>
    )
}
