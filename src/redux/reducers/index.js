import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { currencyReducer } from "./currencyReducer";


const reducers = combineReducers({
    allProducts: productReducer,
    currency: currencyReducer,
})

export default reducers;