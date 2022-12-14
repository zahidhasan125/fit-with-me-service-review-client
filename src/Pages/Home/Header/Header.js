import React from 'react';
import { Card } from 'react-bootstrap';
import header from '../../../assets/header1.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='position-relative'>
            <Card className="bg-light text-white">
                <div className='img-gradient'>
                    <Card.Img className='' src={header} alt="Card image" />
                </div>
                <Card.ImgOverlay>
                    <Card.Title className='my-md-4 ms-md-4'>
                        <h2 className='header-title fw-bold bg-warning rounded w-75 d-inline py-2 px-sm-4 px-2'>GIVE YOUR BODY THE BEST FORM</h2>
                        <h1 className='big-text fw-bold my-4'>DON’T STOP TILL YOU DROP!</h1>

                    </Card.Title>
                    <Card.Text className='ms-4 w-50 position-absolute bottom-0 mb-4 d-none d-md-block'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nisi modi excepturi necessitatibus eos aliquam quasi reprehenderit voluptatem fugiat ducimus, odio dolor incidunt voluptate doloribus temporibus amet dolores mollitia cum.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Header;