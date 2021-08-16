import React from 'react';

import './style.css'

export default function Select({ label, name, options,...rest }) {
    return (
        <div className="Select">
            <label htmlFor={name}>{label}</label>
            <select name="select" {...rest}>
                {options.map(({value, label}, index) => {
                    return <option value={value} key={index}>{label}</option>
                })}
            </select>
        </div>
    );
}