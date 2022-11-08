import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './JoinMe.css'

const JoinMe = () => {
    return (
        <div className='my-4'>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title className='fw-bold fs-1 text-danger'>Join Today & Get The best</Card.Title>
                    <Card.Text className='offer'>
                        50% OFF for First Month
                    </Card.Text>
                    <Button variant="warning rounded-pill fw-bold">JOIN NOW <FaLongArrowAltRight className='ms-2'></FaLongArrowAltRight></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default JoinMe;