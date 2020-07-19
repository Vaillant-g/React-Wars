import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import PeopleDetail from "./details/peopleDetail";
import MovieDetail from "./details/movieDetail";
import PlanetDetail from "./details/planetDetail";
import SpeciesDetail from "./details/speciesDetail";
import StarshipDetail from "./details/starshipDetail";
import VehicleDetail from "./details/vehicleDetail";

export default function Detail(props) {
  let item = props.detail;
  let data = props.items;
  let type = "";

  if (item) {
    if (item["skin_color"] !== undefined) type = "People";
    if (item["title"] !== undefined) type = "Films";
    if (item["gravity"] !== undefined) type = "Planets";
    if (item["skin_colors"] !== undefined) type = "Species";
    if (item["starship_class"] !== undefined) type = "Starships";
    if (item["vehicle_class"] !== undefined) type = "Vehicles";

    let temp = item.name === undefined ? item.title : item.name;
    return (
      <Col>
        <span>
          <h2 className="inlineTitle">Detail  </h2>
          <h4 className="inlineTitle"> {'(' + type + ')'}</h4>
        </span>
        <div className="detail">
          <Card className={type} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{temp}</Card.Title>
              {type === "People" ? (
                <PeopleDetail item={item} data={data}></PeopleDetail>
              ) : null}
              {type === "Films" ? (
                <MovieDetail item={item} data={data}></MovieDetail>
              ) : null}
              {type === "Planets" ? (
                <PlanetDetail item={item} data={data}></PlanetDetail>
              ) : null}
              {type === "Species" ? (
                <SpeciesDetail item={item} data={data}></SpeciesDetail>
              ) : null}
              {type === "Starships" ? (
                <StarshipDetail item={item} data={data}></StarshipDetail>
              ) : null}
              {type === "Vehicles" ? (
                <VehicleDetail item={item} data={data}></VehicleDetail>
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
          <h5 className="detail_vide">Select an item</h5>
        </Card>
      </Col>
    );
}
