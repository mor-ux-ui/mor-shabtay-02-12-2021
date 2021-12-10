import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: [],
    archivedProducts: [],
}
export const productReducer = (state = { initialState }, { type, payload }) => {

    switch (type) {
        case actionTypes.ADD_PRODUCT:
            return { ...state, products: [...state.products, payload] };

        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        case actionTypes.UNARCHIVE_PRODUCT:
            return {
                ...state,
                products: [...state.products, payload],
                archivedProducts: state.archivedProducts.filter(prod => prod.id !== payload.id)
            };

        case actionTypes.ARCHIVE_PRODUCT:
            if (state.archivedProducts)
                return {
                    ...state,
                    products: state.products.filter(prod => prod.id !== payload.id),
                    archivedProducts: [...state.archivedProducts, payload]
                };
            else
                return {
                    ...state,
                    products: state.products.filter(prod => prod.id !== payload.id),
                    archivedProducts: [payload]
                };

        default:
            return state;
    }
}