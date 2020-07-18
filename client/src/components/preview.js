import React from "react";
import Card from "react-bootstrap/Card";

export default function Preview(props) {
  let item = props.item;

  return (
    <div className="preview">
      {/* <Card style={{ width: '15rem' }} border="secondary"> */}
      <Card border="secondary">
        {/* <Card.Img variant="top" src="test" /> */}
        <Card.Body>
          <Card.Title>
            {item.name === undefined ? item.title : item.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
