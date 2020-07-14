import React from 'react';

export default function VehiclePreview(props) {
    let item = props.item;
    return (
        <div className="vehiclePreview">
            <h2>{item.name}</h2>
            <ul>
                <li><span> Name :  </span><span>{item.name} </span>                </li>
            </ul>
        </div >
    );
}