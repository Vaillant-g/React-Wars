import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

export default function Detail(props) {
    let item = props.detail;
    if (item) {
        let temp = item.name === undefined ? item.title : item.name;
        return (
            <div className="detail">
                <Container>
                    <Row>
                        <h2>{temp}</h2>
                    </Row>
                </Container>

            </div >
        );
    }
    else
        return null;
}