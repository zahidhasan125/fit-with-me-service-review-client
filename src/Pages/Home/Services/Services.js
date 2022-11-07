import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

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
                <h2 className='text-black fw-bold'>Our Popular Services</h2>
            </div>
            <div className='row my-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='my-5'>
            <Button variant="outline-warning" className='rounded-pill text-black fw-bold btn-lg w-25 mx-auto'>View All</Button>
            </div>
        </div>
    );
};

export default Services;