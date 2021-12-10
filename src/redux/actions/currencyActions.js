import { actionTypes } from "../constants/actionTypes"

export const setCurrency = (value) =>{
    return {
        type: actionTypes.SET_CURRENCY,
        payload: value
    }
}
export const toggleCurrency = (value) =>{
    return {
        type: actionTypes.TOGGLE_CURRENCY,
        payload: value
    }
}