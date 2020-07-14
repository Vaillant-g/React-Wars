import React from 'react';

export default function StarshipPreview(props) {
    let item = props.item;
    return (
        <div className="starshipPreview">
            <h2>{item.name}</h2>
            <ul>
                <li><span> Name :  </span><span>{item.name} </span>                </li>
            </ul>
        </div >
    );
}