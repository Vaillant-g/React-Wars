import React, { Component } from 'react';
import '../App.css';
import SearchBar from '../components/search-bar';
import ItemList from '../components/itemList';
import Detail from '../components/detail';
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
    api.get('/getmovies').then(res => {
      console.log('"' + res.data + '"');
    })

    var data = require('../data_test.json');
    //    console.log(data);
    this.state = {
      list: data, // test pour front
      filmsList: data['films'],
      peopleList: data['people'],
      planetsList: data['planets'],
      speciesList: data['species'],
      starshipsList: data['starships'],
      vehiclesList: data['vehicles'],
      filter: '',
      detail: null
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

  setActive(element) {
    this.setState({ detail: element })
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
          <Row>
            <Detail detail={this.state.detail}>
            </Detail>
          </Row>
          <Row>
            <ItemList items={this.state.peopleList} filter={this.state.filter} setActive={this.setActive.bind(this)} type='People'></ItemList>
          </Row>
          <Row>
            <ItemList items={this.state.filmsList} filter={this.state.filter} setActive={this.setActive.bind(this)} type='Films'></ItemList>
          </Row>
          <Row>
            <ItemList items={this.state.planetsList} filter={this.state.filter} setActive={this.setActive.bind(this)} type='Planets'></ItemList>
          </Row>
          <Row>
            <ItemList items={this.state.speciesList} filter={this.state.filter} setActive={this.setActive.bind(this)} type='Species'></ItemList>
          </Row>
          <Row>
            <ItemList items={this.state.starshipsList} filter={this.state.filter} setActive={this.setActive.bind(this)} type='Starships'></ItemList>
          </Row>
          <Row>
            <ItemList items={this.state.vehiclesList} filter={this.state.filter} setActive={this.setActive.bind(this)} type='Vehicles'></ItemList>
          </Row>
        </Container>
      </div>
    );
  }
}



export default App;
