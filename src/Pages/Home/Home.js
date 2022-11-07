import React from 'react';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Services></Services>
        </div>
    );
};

export default Home;