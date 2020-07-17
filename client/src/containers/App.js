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
    var categories = { "People": true, "Films": true, "Planets": true, "Species": true, "Starships": true, "Vehicles": true };
    var items = [];
    items["People"] = data['people'];
    items["Films"] = data['films'];
    items["Planets"] = data['planets'];
    items["Species"] = data['species'];
    items["Starships"] = data['starships'];
    items["Vehicles"] = data['vehicles'];
    // [];
    // categories["People"] = categories["Films"] = categories["PePlanetsople"] = categories["Species"] = categories["Starships"] = categories["Vehicles"] = true;
    //    console.log(data);
    this.state = {
      items: items,
      filter: '',
      categories: categories,
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
 //   console.log(searchText);
    this.setState({ filter: searchText });
  }

  setActive(element) {
    this.setState({ detail: element })
  }

  filterCategory(category) {
    let oldCategories = this.state.categories;
//    console.log(oldCategories);
    oldCategories[category] = oldCategories[category] === true ? false : true;
 //   console.log(oldCategories);
    this.setState({ categories: oldCategories });

  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <h1>React-wars</h1>
          </Row>
          <SearchBar callback={this.onSearch.bind(this)} filtercategory={this.filterCategory.bind(this)} categories={this.state.categories}></SearchBar>
          <Row>
            <Detail detail={this.state.detail} items={this.state.items}>
            </Detail>
          </Row>

          {
            Object.entries(this.state.categories).map(([k, v]) => (
              v === true ? (
                < Row >
                  <ItemList items={this.state.items[k]} filter={this.state.filter} setActive={this.setActive.bind(this)} type={k}></ItemList>
                </Row>) : ''
            ))}

        </Container>
      </div >
    );
  }
}



export default App;
