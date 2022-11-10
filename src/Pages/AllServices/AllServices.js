import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
            })
    }, [])

    return (
        <div className='container'>
            <Helmet>
                <title>All Services - Fit With Me</title>
            </Helmet>
            <div className='bg-warning my-5 py-2 w-md-50 mx-auto text-center rounded-4'>
                <h2 className='text-black fw-bold'>ALL MY SERVICES</h2>
            </div>
            <div className='row my-5'>
                {
                    allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;