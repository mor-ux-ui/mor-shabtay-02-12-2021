import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import Switch from './switch/Switch'
import { useHttpAxiosRequest } from "../../hooks/useHttpAxiosRequest";
import { useDispatch } from "react-redux";
import configData from "../../config.json";
import { setCurrency, toggleCurrency } from '../../redux/actions/currencyActions';

export default function Header() {
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${configData.API_KEY}&symbols=ILS,USD`;
    const dispatch = useDispatch();
    

    const fetchConfigs = {
        method: 'GET',
        url: url,
        fetchData: true
    }

    let { response, loading, error, fetchData } = useHttpAxiosRequest({
        fetchData: false
    })

    useEffect(() => {
        fetchData(fetchConfigs)
        const intervalId = setInterval(() => {
            fetchData(fetchConfigs)
        }, configData.CURRENCY_INTERVAL_SEC * 1000)
        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        if (response && !error) {
            dispatch(setCurrency(response.rates.ILS / response.rates.USD))
        }
        else {
            dispatch(setCurrency(1))
            dispatch(toggleCurrency(true))
        }
    }, [response, error, loading])

    const switchChangedHandler = (isOnUsd) => {
        dispatch(toggleCurrency(isOnUsd ? true : false))
    }

    return (
        <header>
            <NavLink to={`/ProductByItem`}>Purchase by item</NavLink>
            <NavLink to={`/ProductByStore`}>Purchase by store</NavLink>
            {response && !error && <div style={{ marginLeft: "auto" }}>
                <Switch on={'USD'} off={'ILS'} active={true} switchChanged={switchChangedHandler} />
            </div>}
        </header>
    )
}
