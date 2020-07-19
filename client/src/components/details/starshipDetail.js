import React from "react";
import Card from "react-bootstrap/Card";

export default function StarshipDetail(props) {
  let starship = props.item;
  let data = props.data;

  var filmsList = [];
  starship.films.forEach((element) => {
    let tmp = element.split("/");
    filmsList.push(tmp[tmp.length - 2]);
  })

  var pilotList = [];
  starship.pilots.forEach((element) => {
    let tmp = element.split("/");
    pilotList.push(tmp[tmp.length - 2]);
  })


  return (
    <Card.Text>
      <span className="font-weight-bold">Name</span> : {starship.name} <br />
      <span className="font-weight-bold">Model</span> : {starship.model} <br />
      <span className="font-weight-bold">Manufacturer</span> : {starship.manufacturer} <br />
      <span className="font-weight-bold">Cost in credits</span> : {starship.cost_in_credits} <br />
      <span className="font-weight-bold">Length</span> : {starship.length} <br />
      <span className="font-weight-bold">Max atmosphering speed</span> : {starship.max_atmosphering_speed} <br />
      <span className="font-weight-bold">Crew</span> : {starship.crew} <br />
      <span className="font-weight-bold">Passengers</span> : {starship.passengers} <br />
      <span className="font-weight-bold">Cargo capacity</span> : {starship.cargo_capacity} <br />
      <span className="font-weight-bold">Consumables</span> : {starship.consumables} <br />
      <span className="font-weight-bold">Hyperdrive rating</span> : {starship.hyperdrive_rating} <br />
      <span className="font-weight-bold">MGLT</span> : {starship.MGLT} <br />
      <span className="font-weight-bold">Starship class</span> : {starship.starship_class} <br />

      {starship.pilots.length !== 0 ?
        (<span><span className="font-weight-bold">Pilots : <br /></span> {
          pilotList.map(numero => (
            ((data['People'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['People'][numero - 1]['name']} <br /></span>) : '')))
        } <br /> </span>)
        : ''}
      {starship.films.length !== 0 ?
        (<span><span className="font-weight-bold">Films : <br /></span> {
          filmsList.map(numero => (
            ((data['Films'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['Films'][numero - 1]['title']} <br /></span>) : '')))
        } <br /> </span>)
        : ''}

    </Card.Text>
  );
}
