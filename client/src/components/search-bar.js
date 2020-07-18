import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            placeHolder: "Search",
            intervalBeforeRequest: 1000,
            lockRequest: false
        }
    }

    render() {
        return (
            <Row>
                <Col md="12" lg="6" >
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={this.state.searchText}
                        onChange={e => this.handleChange(e)}
                    />
                </Col>
                <Col xs md="12" lg="6"> 
                    <Button variant={!this.props.categories['People'] ? 'outline-secondary' : 'secondary'} onClick={e => this.handleOnClick('People')}>People</Button>{' '}
                    <Button variant={!this.props.categories['Films'] ? 'outline-secondary' : 'secondary'} onClick={e => this.handleOnClick('Films')}>Films</Button>{' '}
                    <Button variant={!this.props.categories['Planets'] ? 'outline-secondary' : 'secondary'} onClick={e => this.handleOnClick('Planets')}>Planets</Button>{' '}
                    <Button variant={!this.props.categories['Species'] ? 'outline-secondary' : 'secondary'} onClick={e => this.handleOnClick('Species')}>Species</Button>{' '}
                    <Button variant={!this.props.categories['Starships'] ? 'outline-secondary' : 'secondary'} onClick={e => this.handleOnClick('Starships')}>Starships</Button>{' '}
                    <Button variant={!this.props.categories['Vehicles'] ? 'outline-secondary' : 'secondary'} onClick={e => this.handleOnClick('Vehicles')}>Vehicles</Button>{' '}
                </Col>
            </Row>
        );
    }
    handleOnClick(text) {
        this.props.filtercategory(text);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({ searchText: event.target.value });
        this.props.callback(event.target.value) //
    }
}

export default Searchbar;