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

        fetch(`http://localhost:5000/addservice`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Service Successfully Added!")
                    form.reset();
                }
            })
    }
    return (
        <div className='container login-form w-md-50'>
            <h2 className='text-center fw-bold'>Add a Service</h2>
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
    );
};

export default AddService;