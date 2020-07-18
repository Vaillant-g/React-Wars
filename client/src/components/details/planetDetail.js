import React from "react";
import Card from "react-bootstrap/Card";

export default function PlanetDetail(props) {
  let planet = props.item;
  let data = props.data;

  var starshipList = [];
  planet.films.forEach((element) => {
    let tmp = element.split("/");
    starshipList.push(tmp[tmp.length - 2]);
  });

  var residentList = [];
  planet.residents.forEach((element) => {
    let tmp = element.split("/");
    residentList.push(tmp[tmp.length - 2]);
  })

  var filmsList = [];
  planet.films.forEach((element) => {
    let tmp = element.split("/");
    filmsList.push(tmp[tmp.length - 2]);
  })

  return (
    <Card.Text>
      <span className="font-weight-bold">Name</span> : {planet.name} <br />
      <span className="font-weight-bold">Rotation period</span> :{" "}
      {planet.rotation_period} <br />
      <span className="font-weight-bold">Orbital period</span> :{" "}
      {planet.orbital_period} <br />
      <span className="font-weight-bold">Diameter</span> : {planet.diameter}{" "}
      <br />
      <span className="font-weight-bold">Climate</span> : {planet.climate}{" "}
      <br />
      <span className="font-weight-bold">Gravity</span> : {planet.gravity}{" "}
      <br />
      <span className="font-weight-bold">Terrain</span> : {planet.terrain}{" "}
      <br />
      <span className="font-weight-bold">Surface water</span> :{" "}
      {planet.surface_water} <br />
      <span className="font-weight-bold">Population</span> : {planet.population}{" "}
      <br />
      {planet.residents.length !== 0 ?
                (<span><span className="font-weight-bold">Residents : <br/></span> {
                    residentList.map(numero => (
                        ((data['People'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['People'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
                {planet.residents.length !== 0 ?
                (<span><span className="font-weight-bold">Residents : <br/></span> {
                    residentList.map(numero => (
                        ((data['People'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['People'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
                {planet.films.length !== 0 ?
                (<span><span className="font-weight-bold">Films : <br/></span> {
                    filmsList.map(numero => (
                        ((data['Films'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['Films'][numero - 1]['title']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
    </Card.Text>
  );
}
