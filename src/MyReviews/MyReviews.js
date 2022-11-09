import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import ReviewItem from '../Pages/ReviewItem/ReviewItem';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?userEmail=${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                console.log(data);
            })
    }, [userEmail])

    return (
        <div className='container'>
            <h2 className='text-center d-block fw-bold'>MY REVIEWS: {myReviews.length}</h2>
            {
                myReviews.map(myReview=><ReviewItem key={myReview._id} rviwItem={myReview}></ReviewItem>)
            }
        </div>
    );
};

export default MyReviews;