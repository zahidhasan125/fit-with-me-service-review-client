import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const ReviewItem = ({ rviwItem }) => {
    const { userName, userImg, review, time } = rviwItem;
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
                    <p>Reviewed at: {time}</p>
                </Card.Header>
                <Card.Body className='text-center'>
                    <Card.Text>
                        {review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewItem;