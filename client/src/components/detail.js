import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import PeopleDetail from './details/peopleDetail';
import MovieDetail from './details/movieDetail';

export default function Detail(props) {
    let item = props.detail;
    let data = props.items;
    //    console.log(item);
    let personarray = {}

    if (item) {



        if (item['skin_color'] !== undefined)
            console.log('people');
        if (item['title'] !== undefined)
            console.log('Movie');
        if (item['gravity'] !== undefined)
            console.log('Planet');
        if (item['skin_colors'] !== undefined)
            console.log('Species');
        if (item['starship_class'] !== undefined)
            console.log('Starship');
        if (item['vehicle_class'] !== undefined)
            console.log('Vehicle');

        let temp = item.name === undefined ? item.title : item.name;
        return (
            <Col>
             <h2>Detail</h2>
                <div className="detail">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="test" />
                        <Card.Body>
                            <Card.Title>{(item.name === undefined) ? item.title : item.name}</Card.Title>


                            {(item['skin_color'] != undefined ? <PeopleDetail item={item} data={data}></PeopleDetail> : null)}
                            {(item['title'] != undefined ? <MovieDetail item={item} data={data}></MovieDetail> : null)}


                        </Card.Body>
                    </Card>

                </div >
            </Col>
        );
    }
    else
        return null;
}