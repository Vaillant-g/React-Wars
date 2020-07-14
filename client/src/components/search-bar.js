import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

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
            <div>
                <Form.Control
                    type="text"
                    name="firstName"
                    value={this.state.searchText}
                    onChange={e => this.handleChange(e)}
                />


                {/* <button
                    onClick={this.handleOnClick.bind(this)}>
                    Search
                </button> */}
            </div>
        );
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({ searchText: event.target.value });
        this.props.callback(event.target.value) //
    }

    search() {
        this.props.callback(this.state.searchText)
    }

    handleOnClick() {
        this.search();
    }


}

export default Searchbar;