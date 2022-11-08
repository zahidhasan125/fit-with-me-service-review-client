import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../assets/gallery/img1.jpg';
import img2 from '../../../assets/gallery/img2.jpg';
import img3 from '../../../assets/gallery/img3.jpg';
import img4 from '../../../assets/gallery/img4.jpg';
import img5 from '../../../assets/gallery/img5.jpg';
import img6 from '../../../assets/gallery/img6.jpg';
import img7 from '../../../assets/gallery/img7.jpg';
import img8 from '../../../assets/gallery/img8.jpg';
import './Gallery.css'

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    
    return (
        <div className='my-5'>
            <h2 className='fw-bold fs-1 text-center'>GALLERY</h2>
            <Row xs={2} md={4} className="g-4">
                {images.map((img, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" className='rounded image-card fluid' id="myImg" src={img} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Gallery;