import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const { _id, serviceName, price, details, img, rating } = serviceDetails;
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const serviceId = _id;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })
    }, [_id])
    
    console.log(reviews);

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const reviewItem = { serviceId, userEmail, review }

        // // get reviews




        // review submit
        fetch('http://localhost:5000/submitreview', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Review Submitted Successfully")
                    form.reset();
                }
            })
        console.log(reviewItem);
    }
    return (
        <div className='container'>
            <div>
                <Card>
                    <div className='service-image d-block'>
                        <Card.Img variant="top" className='service-image' src={img} />
                    </div>
                    <Card.Body className='text-center px-5'>
                        <Card.Title className='fs-1 fw-bolder text-decoration-underline'>{serviceName}</Card.Title>
                        <div className='d-flex align-items-center justify-content-around fw-bold'>
                            <h4 className='fw-bold'>Price: ${price}</h4>
                            <p>Ratings: {rating}/5</p>
                        </div>
                        <Card.Text>
                            {details}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='my-4'>
                <h3 className='text-center fw-bold fs-3'>REVIEWS</h3>
                <hr />
                {
                    user ?
                        <>
                            <Form onSubmit={handleReviewSubmit}>
                                <FloatingLabel controlId="floatingTextarea2" label="Write your review here">
                                    <Form.Control
                                        as="textarea"
                                        name="review"
                                        placeholder="Leave a review here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                                <div className='d-flex justify-content-end'>
                                    <Button type='Submit' className='my-3 rounded-pill fw-bold'>Submit Review</Button>
                                </div>
                            </Form>

                        </>
                        :
                        <Link to="/login"><Button variant="primary" size="lg" className='w-50 d-block mx-auto fw-bold'>Login to Review</Button></Link>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;