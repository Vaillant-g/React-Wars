import React from 'react';

export default function Preview(props) {
    let item = props.item;

    return (
        <div className="preview">
            <h2>{(item.name === undefined) ? item.title : item.name}</h2>
            <ul>
                {
                    (item.name === undefined) ? (<div><span> Title :  </span><span>{item.title} </span></div>) : (<div><span> Name :  </span><span>{item.name} </span></div>)
                }
            </ul>
        </div >
    );
}