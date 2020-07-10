import React, { Component } from 'react';

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
                <input
                    type="text"
                    onChange={e => this.handleChange(e)}
                    placeholder={this.state.placeHolder}
                />
                {/* <button
                    onClick={this.handleOnClick.bind(this)}>
                    Search
                </button> */}
            </div>
        );
    }

    handleChange(event) {
        this.setState({ searchText: event.target.value });
        this.props.callback(this.state.searchText) //
    }

    search() {
        this.props.callback(this.state.searchText)
    }

    handleOnClick() {
        this.search();
    }

    
}

export default Searchbar;