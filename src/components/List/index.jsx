import React from 'react'

import './style.css'


export default function List({items}) {
    return (
        <div className="List">
            <ul>
                {items.map((text, index) => {
                    return <li className="item" key={index}>{text}</li>
                })}
            </ul>
        </div>
    );
}