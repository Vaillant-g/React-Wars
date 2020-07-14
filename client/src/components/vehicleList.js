import React from 'react';
import VehiclePreview from './vehiclePreview';

class VehicleList extends React.Component {
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
            <div className="speciesList">
                <h2>Vehicles</h2>
                <div>
                    {this.state.items.map(item => (
                        item.name.toLowerCase().includes(this.state.filter.toLowerCase()) || this.state.filter === '' ?
                            (
                                <VehiclePreview item={item} key={item.name}></VehiclePreview>
                            ) : ''
                    ))}
                </div>
            </div>
        );
    }
}

export default VehicleList;