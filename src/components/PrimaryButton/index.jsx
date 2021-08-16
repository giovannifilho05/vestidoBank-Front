import React from 'react';

import { Link } from 'react-router-dom';

import './style.css'

export default function PrimaryButton({to, children}) {
    return (
        <Link to={to} className="Button" >{children}</Link>
    );
}