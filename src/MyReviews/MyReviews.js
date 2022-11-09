import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../contexts/AuthProvider';
import MyReviewItem from './MyReviewItem';

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

    const handleDeleteReview = (id) => {

        const proceed = window.confirm("Are you sure to Delete this Review?")
        if (proceed) {
            fetch(`http://localhost:5000/myreviews?reviewId=${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remainingReviews = myReviews.filter(rvw => rvw._id !== id)
                        setMyReviews(remainingReviews);
                    }
                })
        }

    }

    return (
        <div className='container'>
            <Helmet>
                <title>My Reviews - Fit With Me</title>
            </Helmet>
            <h2 className='text-center d-block fw-bold'>MY REVIEWS: {myReviews.length}</h2>
            {
                myReviews.map(myReview => <MyReviewItem
                    key={myReview._id}
                    rviwItem={myReview}
                    handleDeleteReview={handleDeleteReview}
                ></MyReviewItem>)
            }
        </div>
    );
};

export default MyReviews;