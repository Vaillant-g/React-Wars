import React from 'react';
import Card from 'react-bootstrap/Card'

export default function MovieDetail(props) {
    let movie = props.item;
    let data = props.data;

    var characterList = [];
    movie.characters.forEach(element => {
        let tmp = element.split('/');
        characterList.push(tmp[tmp.length - 2]);
    });
    var planetList = [];
    movie.planets.forEach(element => {
        let tmp = element.split('/');
        planetList.push(tmp[tmp.length - 2]);
    });

    var vehicleList = [];
    movie.vehicles.forEach(element => {
        let tmp = element.split('/');
        planetList.push(tmp[tmp.length - 2]);
    });
    var speciesList = [];
    movie.species.forEach(element => {
        let tmp = element.split('/');
        speciesList.push(tmp[tmp.length - 2]);
    });



    return (
        <Card.Text>
            <span className="font-weight-bold">Title</span> : {movie.title} <br />
            <span className="font-weight-bold">Episode number</span> : {movie.episode_id} <br />
            <span className="font-weight-bold">Director</span> : {movie.director} cm <br />
            <span className="font-weight-bold">Producer</span> : {movie.producer} kg<br />
            <span className="font-weight-bold">Release date</span> : {movie.release_date} <br />
            {movie.characters.length !== 0 ?
                (<span><span className="font-weight-bold">Characters : <br/></span> {
                    characterList.map(numero => (
                        ((data['People'][numero - 1] !== undefined) ? (<span> -  {data['People'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
            {movie.planets.length !== 0 ?
                (<span><span className="font-weight-bold">Planets : <br/></span> {
                    planetList.map(numero => (
                        ((data['Planets'][numero - 1] !== undefined) ? (<span> -  {data['Planets'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
            {movie.vehicles.length !== 0 ?
                (<span><span className="font-weight-bold">Vehicles : <br/></span> {
                    vehicleList.map(numero => (
                        ((data['Vehicles'][numero - 1] !== undefined) ? (<span> -  {data['Vehicles'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
            {movie.species.length !== 0 ?
                (<span><span className="font-weight-bold">Species : <br/></span> {
                    speciesList.map(numero => (
                        ((data['Species'][numero - 1] !== undefined) ? (<span> -  {data['Species'][numero - 1]['name']} <br /></span>) : '')))
                } <br /> </span>)
                : ''}
        </Card.Text>
    )
}
