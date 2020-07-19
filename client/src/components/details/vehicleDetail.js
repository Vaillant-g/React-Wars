import React from "react";
import Card from "react-bootstrap/Card";

export default function VehicleDetail(props) {
  let vehicle = props.item;
  let data = props.data;



  var filmsList = [];
  vehicle.films.forEach((element) => {
    let tmp = element.split("/");
    filmsList.push(tmp[tmp.length - 2]);
  })

  var pilotList = [];
  vehicle.pilots.forEach((element) => {
    let tmp = element.split("/");
    pilotList.push(tmp[tmp.length - 2]);
  })

  return (
    <Card.Text>
      <span className="font-weight-bold">Name</span> : {vehicle.name} <br />
      <span className="font-weight-bold">Name</span> : {vehicle.name} <br />
      <span className="font-weight-bold">Model</span> : {vehicle.model} <br />
      <span className="font-weight-bold">Manufacturer</span> : {vehicle.manufacturer} <br />
      <span className="font-weight-bold">Cost in credits</span> : {vehicle.cost_in_credits} <br />
      <span className="font-weight-bold">Length</span> : {vehicle.length} <br />
      <span className="font-weight-bold">Max atmosphering speed</span> : {vehicle.max_atmosphering_speed} <br />
      <span className="font-weight-bold">Crew</span> : {vehicle.crew} <br />
      <span className="font-weight-bold">Passengers</span> : {vehicle.passengers} <br />
      <span className="font-weight-bold">Cargo capacity</span> : {vehicle.cargo_capacity} <br />
      <span className="font-weight-bold">Consumables</span> : {vehicle.consumables} <br />
      <span className="font-weight-bold">Vehicle class</span> : {vehicle.vehicle_class} <br />
      {vehicle.pilots.length !== 0 ?
        (<span><span className="font-weight-bold">Pilots : <br /></span> {
          pilotList.map(numero => (
            ((data['People'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['People'][numero - 1]['name']} <br /></span>) : '')))
        } <br /> </span>)
        : ''}
      {vehicle.films.length !== 0 ?
        (<span><span className="font-weight-bold">Films : <br /></span> {
          filmsList.map(numero => (
            ((data['Films'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['Films'][numero - 1]['title']} <br /></span>) : '')))
        } <br /> </span>)
        : ''}



    </Card.Text>
  );
}
