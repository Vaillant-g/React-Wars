import React from 'react';
import Preview from './preview';
import Col from 'react-bootstrap/Col'

export default function ItemList(props) {
    let items = (props.items === undefined) ? null : props.items;
    let filter = (props.filter === undefined) ? null : props.filter;

    function handleClick(item) {
        props.setActive(item);
    }

    if (items)
        return (
            <Col>
                <div className={props.type} >
                    <h2>{props.type}</h2>
                    <div>
                        {items.map(function (item) {
                            let temp = item.name === undefined ? item.title : item.name;
                            return (
                                temp.toLowerCase().includes(filter.toLowerCase()) || filter === '' ?
                                    (<div onClick={() => handleClick(item)} className="previewDiv" key={temp }>
                                        <Preview item={item} key={temp}></Preview>
                                    </div>
                                    ) : ''
                            );
                        })}
                    </div>
                </div >
            </Col>
        );
    else
        return null;
}
