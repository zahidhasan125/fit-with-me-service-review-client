import React from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AddService = () => {


    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const img = form.img.value;
        const price = form.price.value;
        const details = form.details.value;
        let rating = Math.round(Math.random() * 10);

        if (rating >= 5) {
            rating = rating - 5;
        }

        const newService = {
            serviceName,
            img,
            price,
            rating,
            details
        }

        fetch(`https://service-review-server-side-henna.vercel.app/addservice`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('service-review-token')}`
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Service Successfully Added!")
                    form.reset();
                }
            })
    }
    return (
        <div className='container'>
            <div className='bg-warning my-5 mx-auto w-md-50 py-2 text-center rounded-4'>
                <h2 className='text-black fw-bold'>ADD SERVICE</h2>
            </div>
            <div className='container login-form w-md-50'>
                <Form onSubmit={handleAddService} className=''>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control type="text" name='serviceName' placeholder="Enter Service Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Service Image URL</Form.Label>
                        <Form.Control type="text" name='img' placeholder="Enter Service Image" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Service Price</Form.Label>
                        <Form.Control type="number" name='price' placeholder="Enter Service Price" min={0} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDetails" label="Comments">
                        <Form.Label>Service Details</Form.Label>
                        <Form.Control
                            as="textarea"
                            name='details'
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" className='rounded-pill px-4 py-2 fw-bold w-100 mt-4' type="submit">
                        Submit Service
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddService;