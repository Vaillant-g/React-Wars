import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import List from './components/list';
import PeopleList from './components/peopleList';
import FilmList from './components/filmList';
import PlanetList from './components/planetList';
import SpeciesList from './components/speciesList';
import StarshipList from './components/starshipList';
import VehicleList from './components/vehicleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/'
})

class App extends Component {
  constructor(props) {
    super(props);
    api.get('/getmovies').then(res=> {
      console.log('"' + res.data + '"');
    })

    var data = require('./data_test.json');
    console.log(data);
    this.state = {
      list: data, // test pour front
      filmsList: data['films'],
      peopleList: data['people'],
      planetsList: data['planets'],
      speciesList: data['species'],
      starshipsList: data['starships'],
      vehiclesList: data['vehicles'],
      filter: ''
    };

  }

  componentDidMount() {
    //call api serv
    //    fetch('http://localhost:5000')
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(res => {
        if (res.data) {
          console.log(res.data);
        }
      })
  }




  onSearch(searchText) {
    console.log(searchText);
    this.setState({ filter: searchText });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <h1>React-wars</h1>
          </Row>
          <Row>
            <SearchBar callback={this.onSearch.bind(this)}></SearchBar>
          </Row>
          <PeopleList items={this.state.peopleList} filter={this.state.filter}></PeopleList>
          <FilmList items={this.state.filmsList} filter={this.state.filter}></FilmList>
          <PlanetList items={this.state.planetsList} filter={this.state.filter}></PlanetList>
          <SpeciesList items={this.state.speciesList} filter={this.state.filter}></SpeciesList>
          <StarshipList items={this.state.starshipsList} filter={this.state.filter}></StarshipList>
          <VehicleList items={this.state.vehiclesList} filter={this.state.filter}></VehicleList>
        </Container>
      </div>
    );
  }
}



export default App;
