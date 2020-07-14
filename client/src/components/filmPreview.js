import React from 'react';

export default function FilmsPreview(props) {
    let item = props.item;
    return (
        <div className="filmPreview">
            <h2>{item.name}</h2>
            <ul>
                <li><span> Title :  </span><span>{item.title} </span>                </li>
            </ul>
        </div >
    );
}