import React from 'react';
import ReviewItem from '../Pages/ReviewItem/ReviewItem';

const MyReviews = () => {
    
    return (
        <div className='container'>
            <h2 className='text-center d-block fw-bold'>MY REVIEWS</h2>
            <ReviewItem></ReviewItem>
        </div>
    );
};

export default MyReviews;