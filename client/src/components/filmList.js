import React from 'react';
import FilmsPreview from './filmPreview';

class FilmList extends React.Component {
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
            <div className="filmList">
                <h2>Films</h2>
                <div>
                    {this.state.items.map(item => (
                        item.title.toLowerCase().includes(this.state.filter.toLowerCase()) || this.state.filter === '' ?
                            (
                                <FilmsPreview item={item} key={item.title}></FilmsPreview>
                            ) : ''
                    ))}
                </div>
            </div>
        );
    }
}

export default FilmList;