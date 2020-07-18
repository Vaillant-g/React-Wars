import React from 'react';
import Card from 'react-bootstrap/Card'

export default function PeopleDetail(props) {
    let people = props.item;
    let data = props.data;

    let homeworldtmp = people.homeworld.split('/');
    var homeworld = homeworldtmp[homeworldtmp.length - 2];
    var movieList = [];
    people.films.forEach(element => {
        let tmp = element.split('/');
        movieList.push(tmp[tmp.length - 2]);
    });
    if (people.species.length > 0) {
        let speciesArray = people.species[0].split('/');
        var speciesNumber = speciesArray[speciesArray.length - 2]
    }
    var vehicleList = [];
    people.vehicles.forEach(element => {
        let tmp = element.split('/');
        vehicleList.push(tmp[tmp.length - 2]);
    });
    var starshipList = [];
    people.starships.forEach(element => {
        let tmp = element.split('/');
        starshipList.push(tmp[tmp.length - 2]);
    });



    return (
        <Card.Text>
            <span className="font-weight-bold">Name</span> : {people.name} <br />
            <span className="font-weight-bold">Gender</span> : {people.gender} <br />
            <span className="font-weight-bold">Height</span> : {people.height} cm <br />
            <span className="font-weight-bold">Mass</span> : {people.mass} kg<br />
            <span className="font-weight-bold">Hair color</span> : {people.hair_color} <br />
            <span className="font-weight-bold">Skin color</span> : {people.skin_color} <br />
            <span className="font-weight-bold">Eye color</span> : {people.eye_color} <br />
            <span className="font-weight-bold">Birth year</span> : {people.birth_year} <br />
            <span className="font-weight-bold">Homeworld</span> : {data['Planets'][homeworld]['name']} <br />
            <span className="font-weight-bold">Films</span> : <br />

            {movieList.map(numero => (
                <span> -  {data['Films'][numero - 1]['title']} <br /></span>
            ))}
            {people.species.length !== 0 ?
                (<span><span className="font-weight-bold">Species : </span> {data['Species'][speciesNumber - 1]['name']} <br /> </span>)
                : ''}
            {people.vehicles.length !== 0 ?
                (<span><span className="font-weight-bold">Vehicles : <br/></span> {
                    vehicleList.map(numero => (
                        ((data['Vehicles'][numero - 1] !== undefined) ? (<span> -  {data['Vehicles'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
            {people.starships.length !== 0 ?
                (<span><span className="font-weight-bold">Starships : <br/></span> {
                    starshipList.map(numero => (
                        ((data['Vehicles'][numero - 1] !== undefined) ? (<span> -  {data['Vehicles'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
        </Card.Text>
    )
}