import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Modal } from 'react-bootstrap';
import { FaEdit, FaTrashAlt, FaUserAlt } from 'react-icons/fa';

const MyReviewItem = ({ rviwItem, removeForever }) => {

    const { _id, userName, serviceName, userImg, review, date } = rviwItem;

    const [show, setShow] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    if (deleteConfirm) {
        // handleDeleteConfirm(_id)
        console.log(deleteConfirm)
    }

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
                    <div className='d-flex justify-content-between align-items-center my-2'>
                        <h4 className='fw-bold'>Service Name: {serviceName}</h4>
                        <ButtonGroup>
                            <Button variant="outline-warning rounded-end rounded-pill"><FaEdit></FaEdit></Button>
                            <Button onClick={handleShow} variant="outline-danger rounded-start rounded-pill"><FaTrashAlt></FaTrashAlt></Button>
                        </ButtonGroup>
                    </div>
                    <Card.Text>
                        {review}
                    </Card.Text>

                </Card.Body>
            </Card>
            {/* Delete confirmation modal */}
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure to Delete this Review?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><strong>Preview:</strong> {review.slice(0, 80) + '...'}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary rounded-pill" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger rounded-pill" onClick={()=>removeForever(_id)}>
                            Delete <FaTrashAlt></FaTrashAlt>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default MyReviewItem;