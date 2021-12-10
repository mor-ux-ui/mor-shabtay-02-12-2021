import React from 'react'
import {Routes, Route, Navigate, NavLink, useLocation} from "react-router-dom";
import DeliveryList  from "./deliveryList/DeliveryList"
import ArchivedList  from "./archiveList/ArchivedList"

export default function ProductByItem() {
    
    return (
        <React.Fragment>
            <header className="sub-header">
                <NavLink to={`/ProductByItem/DeliveryList`}>Delivery list</NavLink>
                <NavLink to={`/ProductByItem/ArchivedList`}>Archived list</NavLink>
            </header>
            <div className="container">
                <Routes>
                    <Route exact path={`/`} element={<Navigate replace to={`/ProductByItem/DeliveryList`}/>} /> 
                    <Route path={`/DeliveryList`} element={<DeliveryList />} />
                    <Route exact path={`/ArchivedList`} element={<ArchivedList />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}
