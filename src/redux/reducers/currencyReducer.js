import { actionTypes } from "../constants/actionTypes";

const initialState = {
    currencyValue: 1,
    currencyInUsd: true,
}
export const currencyReducer = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_CURRENCY:
            return { ...state, currencyValue: payload };

        case actionTypes.TOGGLE_CURRENCY:
            return { ...state, currencyInUsd: payload };

        default:
            return state;
    }
}