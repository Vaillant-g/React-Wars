import React from 'react';
import Preview from './preview';
import Col from 'react-bootstrap/Col'

export default function ItemList(props) {
    let items = (props.items === undefined) ? null : props.items;
    let filter = (props.filter === undefined) ? null : props.filter;
    let type = props.type;

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
                            let itemname = item.name === undefined ? item.title : item.name;
                            return (
                                itemname.toLowerCase().includes(filter.toLowerCase()) || filter === '' ?
                                    (<div onClick={() => handleClick(item)} className="previewDiv" key={itemname }>
                                        <Preview type={type} item={item} key={itemname}></Preview>
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
