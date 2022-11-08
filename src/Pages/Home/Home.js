import React from 'react';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import JoinMe from './JoinMe/JoinMe';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Services></Services>
            <JoinMe></JoinMe>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;