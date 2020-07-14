import React from 'react';

export default function PlanetPreview(props) {
    let item = props.item;
    return (
        <div className="planetPreview">
            <h2>{item.name}</h2>
            <ul>
                <li><span> Title :  </span><span>{item.name} </span>                </li>
            </ul>
        </div >
    );
}