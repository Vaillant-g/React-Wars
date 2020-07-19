import React from "react";
import Card from "react-bootstrap/Card";

export default function Preview(props) {
  let item = props.item;

  return (
    <div className="preview">
      <Card className={props.type}>
        <Card.Body>
          <Card.Title>
            {item.name === undefined ? item.title : item.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
