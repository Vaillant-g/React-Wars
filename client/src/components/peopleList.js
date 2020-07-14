import React from 'react';
import PeoplePreview from './peoplePreview';

class PeopleList extends React.Component {
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
            <div className="peopleList">
                <h2>People</h2>
                <div>
                    {this.state.items.map(item => (
                        item.name.toLowerCase().includes(this.state.filter.toLowerCase()) || this.state.filter === '' ?
                            (
                                <PeoplePreview item={item} key={item.name}></PeoplePreview>
                            ) : ''
                    ))}
                </div>
            </div>
        );
    }
}

export default PeopleList;