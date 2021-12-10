import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import ProductTable from "../ProductTable"
import { unArchiveProduct } from '../../../redux/actions/productActions';
import AutoCompleteProductInput from '../AutoCompleteProductInput';

export default function ArchivedList() {

    let products = useSelector(state => state.allProducts.archivedProducts);
    const [filterdProducts, seFilterdProducts] = useState([])
    const [autoCompleteTxt, setAutoCompleteTxt] = useState('')

    const dispatch = useDispatch();

    const unArchiveProductHandler = (prod) => {
        dispatch(unArchiveProduct(prod));
    }
    const autoCompleteInputChangedHandler = (inputTxt) => {
        setAutoCompleteTxt(inputTxt);
        if (inputTxt === '')
            seFilterdProducts(products);
        else {
            seFilterdProducts(filterProductsByAutoComplete(inputTxt));
        }
    }
    const filterProductsByAutoComplete = useCallback((txt) =>{
        if(products)
        return products.filter(prod => prod.title.toLowerCase().trim().includes(txt.toLowerCase().trim()))
    },[products])
    useEffect(() => {
        seFilterdProducts(filterProductsByAutoComplete(autoCompleteTxt))
    }, [products, autoCompleteTxt, filterProductsByAutoComplete]);

    return (
        <React.Fragment>
            <div className="actions-row">
                <AutoCompleteProductInput
                    onInputChanged={autoCompleteInputChangedHandler}
                    active={products && products.length > 0}
                />
            </div>

            <ProductTable
                loading={false}
                error={''}
                products={filterdProducts}
                actionBtn={{ title: "Reactivate", handler: unArchiveProductHandler }}
            />
        </React.Fragment>
    )
}
