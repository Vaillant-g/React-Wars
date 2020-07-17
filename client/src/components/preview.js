import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Preview(props) {
    let item = props.item;

    return (
        <div className="preview">
            <Card style={{ width: '18rem' }} border="primary">
            <Card.Img variant="top" src="test" />
                <Card.Body>
                    <Card.Title>{(item.name === undefined) ? item.title : item.name}</Card.Title>

                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>
            {/* <h2>{(item.name === undefined) ? item.title : item.name}</h2>
            <ul>
                {
                    (item.name === undefined) ? (<div><span> Title :  </span><span>{item.title} </span></div>) : (<div><span> Name :  </span><span>{item.name} </span></div>)
                }
            </ul> */}
        </div >
    );
}