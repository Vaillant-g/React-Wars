import React from 'react';

export default function SpeciesPreview(props) {
    let item = props.item;
    return (
        <div className="speciesPreview">
            <h2>{item.name}</h2>
            <ul>
                <li><span> Title :  </span><span>{item.name} </span>                </li>
            </ul>
        </div >
    );
}