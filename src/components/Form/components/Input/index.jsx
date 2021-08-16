import React from 'react';

import './style.css'

export default function Input({ label, name, ...rest }) {
    return (
        <div className="Input">
            <label htmlFor={name}>{label}</label>
            <input id={name} type="text" {...rest} />
        </div>
    );
}