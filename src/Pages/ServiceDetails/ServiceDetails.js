import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const { _id, serviceName, price, details, img, rating } = serviceDetails;
    const { user } = useContext(AuthContext);

    const userEmail = user?.email;
    const userImg = user?.photoURL || "";
    const userName = user?.displayName || "";
    const serviceId = _id;

    // get reviews
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })
    }, [_id])


    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const reviewItem = {
            serviceId,
            review,
            serviceName,
            userEmail,
            userName,
            userImg
        }

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
                    const newReviews = [reviewItem, ...reviews];
                    setReviews(newReviews);
                }
            })
        console.log(reviewItem);
    }
    return (
        <div className='container'>
            {/* service details */}
            <div>
                <Helmet>
                    <title>Service Details & Reviews - Fit With Me</title>
                </Helmet>
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
            {/* Add Review */}
            <div className='my-4'>
                <h3 className='text-center fw-bold fs-3 my-4'>ADD REVIEWS</h3>
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
                <hr />
                {/* All Reviews for this service */}
                <div>
                    <h3 className='text-center fw-bold fs-3 my-4'>ALL REVIEWS</h3>
                    {
                        reviews.length !== 0
                            ?
                            
                                reviews.map(rviwItem => <ReviewItem key={rviwItem._id} rviwItem={rviwItem}></ReviewItem>)
                            
                            :
                            <h3 className='text-center fw-bold fs-3 my-4'> No reviews were added. </h3>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;