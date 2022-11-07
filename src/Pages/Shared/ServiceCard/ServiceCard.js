import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { _id, serviceName, img, price, details } = service;
    return (
        <div className="col-4">
            <Card>
                <div className='img-thumbnail border-0 d-block mx-auto'>
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body className='text-center'>
                    <Card.Title className='fw-bolder fs-1'>{serviceName}</Card.Title>
                    <Card.Text className='fw-bold fs-4'>
                        Price: ${price}
                    </Card.Text>
                    <Card.Text>
                        {details.slice(0, 100) + '....'}
                    </Card.Text>
                    <Link to={`/service/${_id}`}><Button variant="primary" className='fw-bold rounded-pill'>View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;