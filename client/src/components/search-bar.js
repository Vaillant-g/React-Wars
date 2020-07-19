import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
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
                        name="searchBarInput"
                        className="searchBarInput"
                        value={this.state.searchText}
                        onChange={e => this.handleChange(e)}
                    />
                </Col>
                <Col xs md="12" lg="6">
                    <Button className='People' variant={!this.props.categories['People'] ? 'secondary' : 'outline-secondary'} onClick={e => this.handleOnClick('People')}>People</Button>{' '}
                    <Button className='Films' variant={!this.props.categories['Films'] ? 'secondary' : 'outline-secondary'} onClick={e => this.handleOnClick('Films')}>Films</Button>{' '}
                    <Button className='Planets' variant={!this.props.categories['Planets'] ? 'secondary' : 'outline-secondary'} onClick={e => this.handleOnClick('Planets')}>Planets</Button>{' '}
                    <Button className='Species' variant={!this.props.categories['Species'] ? 'secondary' : 'outline-secondary'} onClick={e => this.handleOnClick('Species')}>Species</Button>{' '}
                    <Button className='Starships' variant={!this.props.categories['Starships'] ? 'secondary' : 'outline-secondary'} onClick={e => this.handleOnClick('Starships')}>Starships</Button>{' '}
                    <Button className='Vehicles' variant={!this.props.categories['Vehicles'] ? 'secondary' : 'outline-secondary'} onClick={e => this.handleOnClick('Vehicles')}>Vehicles</Button>{' '}
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