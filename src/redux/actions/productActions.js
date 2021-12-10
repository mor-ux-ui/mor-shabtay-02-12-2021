import { actionTypes } from "../constants/actionTypes"

export const setProducts = (products) =>{
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const archiveProduct = (product) =>{
    return {
        type: actionTypes.ARCHIVE_PRODUCT,
        payload: product
    }
}
export const unArchiveProduct = (product) =>{
    return {
        type: actionTypes.UNARCHIVE_PRODUCT,
        payload: product
    }
}
export const addProduct = (product) =>{
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: product
    }
}