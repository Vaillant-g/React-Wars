import React from 'react';
import PlanetPreview from './planetPreview';

class PlanetList extends React.Component {
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
            <div className="planetList">
                <h2>Planets</h2>
                <div>
                    {this.state.items.map(item => (
                        item.name.toLowerCase().includes(this.state.filter.toLowerCase()) || this.state.filter === '' ?
                            (
                                <PlanetPreview item={item} key={item.name}></PlanetPreview>
                            ) : ''
                    ))}
                </div>
            </div>
        );
    }
}

export default PlanetList;