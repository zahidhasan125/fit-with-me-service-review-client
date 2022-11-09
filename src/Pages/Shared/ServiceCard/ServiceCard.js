import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, serviceName, img, price, details } = service;
    return (
        <div className="col-lg-4">
            <Card className='mb-4'>
                <PhotoProvider>
                    <div className='img-thumbnail border-0 d-block mx-auto'>
                        <PhotoView src={img}>
                            <Card.Img variant="top" src={img} />
                        </PhotoView>
                    </div>
                </PhotoProvider>
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