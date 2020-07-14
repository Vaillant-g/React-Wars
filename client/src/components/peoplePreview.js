import React from 'react';
import Card from 'react-bootstrap/Card'

export default function PeoplePreview(props) {
    let item = props.item;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.birth_year}
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* <div className="peoplePreview">
                <h2>{item.name}</h2>
                <ul>
                    <li><span> Name :  </span><span>{item.name} </span>                </li>
                    <li><span> Year of birth :  </span><span>{item.birth_year} </span>                </li>
                    <li><span> Eye color :  </span><span>{item.eye_color} </span>                </li>
                    <li><span> Gender :  </span><span>{item.gender} </span>                </li>
                    <li><span> Hair color :  </span><span>{item.hair_color} </span>                </li>
                    <li><span> Height :  </span><span>{item.height} </span>                </li>
                    <li><span> Mass :  </span><span>{item.mass} </span>                </li>
                    <li><span> Skin color :  </span><span>{item.skin_color} </span>                </li>
                    <li><span> Homeworld :  </span><span>{item.homeworld} </span>                </li>
                    {/* // arrays :films
            // arrays :species
            // arrays :starships
            // arrays :vehicles */}
                    {/* <li><span> url :  </span><span>{item.url} </span>                </li>
                <li><span> created :  </span><span>{item.created} </span>                </li>
                <li><span> edited :  </span><span>{item.edited} </span>                </li> 
                </ul>
            </div > */}
        </div>
    );
}