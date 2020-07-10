import React, { Component } from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filter: ''
        }
    }

    componentDidMount() {
        this.setState({
            items: this.props.items,
            filter: this.props.filter
        });
        console.log(this.props.items);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ filter: nextProps.filter })
        console.log('new filter : "'+ nextProps.filter + '"');
    }
    render() {
        return (
            <ul>
                {this.state.items.map(item => (
                    item.name.includes(this.state.filter) || this.state.filter == '' ?
                        (<li key={item.name}>
                            {item.name} &nbsp;
                        </li>) : ''
                ))}
            </ul>
        )
    }
}

export default List;