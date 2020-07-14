import React from 'react';
import StarshipPreview from './starshipPreview';

class StarshipList extends React.Component {
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
                <h2>Starships</h2>
                <div>
                    {this.state.items.map(item => (
                        item.name.toLowerCase().includes(this.state.filter.toLowerCase()) || this.state.filter === '' ?
                            (
                                <StarshipPreview item={item} key={item.name}></StarshipPreview>
                            ) : ''
                    ))}
                </div>
            </div>
        );
    }
}

export default StarshipList;