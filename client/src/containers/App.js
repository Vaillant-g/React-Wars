import React, { Component } from "react";
import "../App.css";
import SearchBar from "../components/search-bar";
import ItemList from "../components/itemList";
import Detail from "../components/detail";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

class App extends Component {
  constructor(props) {
    super(props);

    var data = require("../data_test.json");
    var categories = {
      People: true,
      Films: true,
      Planets: true,
      Species: true,
      Starships: true,
      Vehicles: true,
    };
    this.state = {
      items: null,
      filter: "",
      categories: categories,
      detail: null,
    };
  }

  componentDidMount() {
  
    api.get("/getData").then((res) => {
      console.log(res.data);
      var items = [];
      items["People"] = res.data[1];
      items["Films"] = res.data[0];
      items["Planets"] = res.data[2];
      items["Species"] = res.data[3];
      items["Starships"] = res.data[4];
      items["Vehicles"] = res.data[5];

      this.setState({ items });
    });
  }

  onSearch(searchText) {
    //   console.log(searchText);
    this.setState({ filter: searchText });
  }

  setActive(element) {
    this.setState({ detail: element });
    window.scrollTo(0, 0)
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
        <div className="header">
          <Container>
            <Row>
              <Col>
                <h1>React-wars</h1>
              </Col>
            </Row>
            <SearchBar
              callback={this.onSearch.bind(this)}
              filtercategory={this.filterCategory.bind(this)}
              categories={this.state.categories}
            ></SearchBar>
          </Container>
        </div>
        {this.state.items === null ? (
          ""
        ) : (
            <Container>
              <Row>
                <Col md="8">
                  {Object.entries(this.state.categories).map(([k, v]) =>
                    v === true ? (
                      <Row key={k}>
                        <ItemList
                          items={this.state.items[k]}
                          filter={this.state.filter}
                          setActive={this.setActive.bind(this)}
                          type={k}
                        ></ItemList>
                      </Row>
                    ) : (
                        ""
                      )
                  )}
                </Col>
                <Col xs={{ order: "first" }} lg={{ order: "last" }}>
                  <Detail
                    detail={this.state.detail}
                    items={this.state.items}
                  ></Detail>
                </Col>
              </Row>
            </Container>
          )}
      </div>
    );
  }
}

export default App;
