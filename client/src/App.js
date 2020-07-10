import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import List from './components/list';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    var data = require('./data_test.json');
    this.state = {
      list: data, // test pour front
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
    //    if (searchText) {
    this.setState({ filter: searchText });
    console.log(searchText);
    //  }
  }

  render() {
    return (
      <div className="App" >
        <h1>react-wars</h1>
        <SearchBar callback={this.onSearch.bind(this)}></SearchBar>
        <List items={this.state.list} filter={this.state.filter}></List>

      </div>
    );
  }
}



export default App;
