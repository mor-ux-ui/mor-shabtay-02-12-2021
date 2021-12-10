import React, { useState } from 'react'
import classes from './switch.module.scss'

export default function Switch({ on = "on", off = "off", active, switchChanged }) {
    const [checked, setChecked] = useState(active);

    const handleChange = () => {
        setChecked(!checked);
        switchChanged(!checked);
    };
    return (
        <div className={classes['switch-wrapper']}>
            <span>{off}</span>
            <label className={classes.switch}>
                <input type="checkbox" checked={checked}
                    onChange={handleChange} />
                <span className={`${classes.slider} ${classes.round}`}></span>
            </label>
            <span>{on}</span>
        </div>
    )
}
