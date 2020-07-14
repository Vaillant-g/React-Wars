import React, { Component } from 'react';
import DetailCard from './peoplePreview';
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
        console.log('new filter : "' + nextProps.filter + '"');
    }
    render() {
        return (
            <div>
                {this.state.items.map(item => (
                    item.name.toLowerCase().includes(this.state.filter.toLowerCase()) || this.state.filter === '' ?
                        (
                            <DetailCard item={item}></DetailCard>
                        ) : ''
                ))}
            </div>
        )
    }
}

export default List;