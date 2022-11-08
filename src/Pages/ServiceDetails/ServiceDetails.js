import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const { _id, serviceName, price, details, img, rating } = serviceDetails;
    console.log(serviceDetails);
    return (
        <div className='container'>
            <Card>
                <div className='service-image'>
                    <Card.Img variant="top" className='' src={img} />
                </div>
                <Card.Body className='text-center px-5'>
                    <Card.Title className='fs-1 fw-bolder text-decoration-underline'>{serviceName}</Card.Title>
                    <div className='d-flex align-items-center justify-content-between fw-bold'>
                        <h4 className='fw-bold'>Price: ${price}</h4>
                        <p>Ratings: {rating}/5</p>
                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;