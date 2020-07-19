import React from "react";
import Card from "react-bootstrap/Card";

export default function SpeciesDetail(props) {
  let species = props.item;
  let data = props.data;

  let homeworldtmp = species.homeworld.split('/');
    var homeworld = homeworldtmp[homeworldtmp.length - 2];

  var filmsList = [];
  species.films.forEach((element) => {
    let tmp = element.split("/");
    filmsList.push(tmp[tmp.length - 2]);
  })

  var peopleList = [];
  species.people.forEach(element => {
      let tmp = element.split('/');
      console.log(tmp[tmp.length - 2]);
      console.log(data['People']);
      peopleList.push(tmp[tmp.length - 2]);
  });

  return (
    <Card.Text>
      <span className="font-weight-bold">Name</span> : {species.name} <br />
      <span className="font-weight-bold">name</span> : {species.name} <br />
            <span className="font-weight-bold">Classification</span> : {species.classification} <br />
            <span className="font-weight-bold">Designation</span> : {species.designation} <br />
            <span className="font-weight-bold">Average height</span> : {species.average_height} <br />
            <span className="font-weight-bold">Skin colors</span> : {species.skin_colors} <br />
            <span className="font-weight-bold">Hair colors</span> : {species.hair_colors} <br />
            <span className="font-weight-bold">Eye colors</span> : {species.eye_colors} <br />
            <span className="font-weight-bold">Average lifespan</span> : {species.average_lifespan} <br />
            <span className="font-weight-bold">Homeworld</span> : {data['Planets'][homeworld]['name']} <br /> {/*check si la data est load */}
            <span className="font-weight-bold">Language</span> : {species.language} <br />
                {species.films.length !== 0 ?
                (<span><span className="font-weight-bold">Films : <br/></span> {
                    filmsList.map(numero => (
                        ((data['Films'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['Films'][numero - 1]['title']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
                {species.people.length !== 0 ?
                (<span><span className="font-weight-bold">People : <br/></span> {
                  peopleList.map(numero => (
                        ((data['People'][numero - 1] !== undefined) ? (<span key={numero}> -  {data['People'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}

    </Card.Text>
  );
}
