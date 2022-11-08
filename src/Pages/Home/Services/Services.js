import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className='bg-warning my-5 py-4 text-center rounded-4'>
                <h2 className='text-black fw-bold'>My Popular Services</h2>
            </div>
            <div className='row my-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='my-3'>
            <Link to="/allservices"><Button variant="outline-warning" className='rounded-pill text-success fw-bold btn-lg w-25 mx-auto'>View All<FaLongArrowAltRight className='ms-2'></FaLongArrowAltRight></Button></Link>
            </div>
        </div>
    );
};

export default Services;