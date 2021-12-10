import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHttpAxiosRequest } from "../../../hooks/useHttpAxiosRequest";
import { setProducts } from '../../../redux/actions/productActions';
import ProductTable from "../ProductTable";
import { archiveProduct } from '../../../redux/actions/productActions';
import { getRandomDate, getRandomStore } from '../../../utilities/utilFuncs';
import AutoCompleteProductInput from '../AutoCompleteProductInput';
import ModalWrapper from "../../UiComponents/ModalWrapper";
import NewProductModal from '../NewProductModal';

const DeliveryList = () => {
    const products = useSelector(state => state.allProducts.products)
    const [filterdProducts, seFilterdProducts] = useState([])
    const [newProductModalActive, setNewProductModalActive] = useState(false)
    const [autoCompleteTxt, setAutoCompleteTxt] = useState('')
    const dispatch = useDispatch();

    const { response, loading, error } = useHttpAxiosRequest({
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
        fetchData: !products ? true : false
    })

    useEffect(() => {
        if (response && !products) {
            dispatch(setProducts(response.map(prod => ({
                ...prod,
                deliveryEstimatedDate: getRandomDate(new Date(2020, 1, 1), new Date()),
                store: getRandomStore()
            }))));
        }
        seFilterdProducts(products);
    }, [response, products]);

    const archiveProductHandler = (prod) => {
        dispatch(archiveProduct(prod));
    }
    const autoCompleteInputChangedHandler = (inputTxt) => {
        setAutoCompleteTxt(inputTxt);
        if (inputTxt === '')
            seFilterdProducts(products);
        else {
            seFilterdProducts(filterProductsByAutoComplete(inputTxt));
        }
    }
    const filterProductsByAutoComplete = (txt) =>{
        if(products)
            return products.filter(prod => prod.title.toLowerCase().trim().includes(txt.toLowerCase().trim()))

    }
    useEffect(() => {
        seFilterdProducts(filterProductsByAutoComplete(autoCompleteTxt))
    }, [products]);
    return (
        <React.Fragment>
            <div className="actions-row">
                {newProductModalActive &&
                    <ModalWrapper onBackDropClick={() => { setNewProductModalActive(false) }}>
                        <NewProductModal CloseModal={() => { setNewProductModalActive(false) }} />
                    </ModalWrapper>}
                <AutoCompleteProductInput
                    onInputChanged={autoCompleteInputChangedHandler}
                    active={ !error && !loading && products && products.length > 0}
                />
                {!error && !loading && <button className="add-prod-btn" onClick={() => { setNewProductModalActive(!newProductModalActive) }}>Add Product ＋</button>}
            </div>
            <ProductTable
                loading={loading}
                error={error}
                products={filterdProducts}
                actionBtn={{ title: "archive", handler: archiveProductHandler }}
            />
        </React.Fragment>
    )
}
export default DeliveryList;