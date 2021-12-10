import React from 'react'

export default function AutoCompleteProductInput({ onInputChanged, active }) {

    return (
        <input className="auto-complete-input" type="text" disabled = {!active? "disabled" : ""} placeholder="Search for product" onChange={e => onInputChanged(e.target.value)} />
    )
}
