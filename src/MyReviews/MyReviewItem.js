import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { FaEdit, FaTrashAlt, FaUserAlt } from 'react-icons/fa';

const MyReviewItem = ({ rviwItem, handleDeleteReview }) => {
    
    const { _id, userName, userImg, review, date } = rviwItem;

    return (
        <div>
            <Card
                bg="light"
                key="light"
                text={"light" === 'light' ? 'dark' : 'white'}
                style={{}}
                className="mb-2"
            >
                <Card.Header className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        {
                            userImg ?
                                <img src={userImg} alt="" className='rounded-circle' style={{ width: "40px" }} />
                                :
                                <FaUserAlt className='rounded-circle fs-1' style={{ width: "40px" }} ></FaUserAlt>
                        }
                        {
                            userName ?
                                <p style={{ margin: "0" }} className="ms-2 fw-bold">{userName}</p>
                                :
                                <p style={{ margin: "0" }} className="ms-2 fw-bold">No Name</p>
                        }
                    </div>
                    <p>Reviewed at: {date}</p>
                </Card.Header>
                <Card.Body className=''>
                    <div className='d-flex justify-content-end'>
                        <ButtonGroup>
                            <Button variant="outline-warning"><FaEdit></FaEdit></Button>
                            <Button onClick={() => handleDeleteReview(_id)} variant="outline-danger"><FaTrashAlt></FaTrashAlt></Button>
                        </ButtonGroup>
                    </div>
                    <Card.Text>
                        {review}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default MyReviewItem;