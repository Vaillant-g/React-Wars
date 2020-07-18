import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import PeopleDetail from "./details/peopleDetail";
import MovieDetail from "./details/movieDetail";
import PlanetDetail from "./details/planetDetail";
import SpeciesDetail from "./details/speciesDetail";

export default function Detail(props) {
  let item = props.detail;
  let data = props.items;
  let type = "";

  if (item) {
    if (item["skin_color"] !== undefined) type = "People";
    if (item["title"] !== undefined) type = "Movie";
    if (item["gravity"] !== undefined) type = "Planet";
    if (item["skin_colors"] !== undefined) type = "Species";
    if (item["starship_class"] !== undefined) type = "Starship";
    if (item["vehicle_class"] !== undefined) type = "Vehicle";

    let temp = item.name === undefined ? item.title : item.name;
    return (
      <Col>
        <span>
          <h2 className="inlineTitle">Detail  </h2>
          <h4 className="inlineTitle"> { '(' + type  + ')'}</h4>
        </span>
        <div className="detail">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="test" /> */}
            <Card.Body>
              <Card.Title>{temp}</Card.Title>
              {type === "People" ? (
                <PeopleDetail item={item} data={data}></PeopleDetail>
              ) : null}
              {item["title"] !== undefined ? (
                <MovieDetail item={item} data={data}></MovieDetail>
              ) : null}
              {item["gravity"] !== undefined ? (
                <PlanetDetail item={item} data={data}></PlanetDetail>
              ) : null}
              {item["skin_colors"] !== undefined ? (
                <SpeciesDetail item={item} data={data}></SpeciesDetail>
              ) : null}
            </Card.Body>
          </Card>
        </div>
      </Col>
    );
  } else
    return (
      <Col>
        <h2>Detail</h2>
        <Card>
          <h5>Select an item</h5>
        </Card>
      </Col>
    );
}
