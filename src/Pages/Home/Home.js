import React from 'react';
import { Helmet } from 'react-helmet';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import JoinMe from './JoinMe/JoinMe';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Home - Fit With Me</title>
            </Helmet>
            <Header></Header>
            <Services></Services>
            <JoinMe></JoinMe>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;