import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReviewItem from './MyReviewItem';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?userEmail=${userEmail}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-review-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    }, [userEmail])

    const removeForever = (id) => {
        fetch(`http://localhost:5000/myreviews?reviewId=${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-review-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = myReviews.filter(review => review._id !== id);
                    setMyReviews(remaining);
                    toast.success("Review Deleted Successfully")
                }
            })
    }

    return (
        <div className='container'>
            <Helmet>
                <title>My Reviews - Fit With Me</title>
            </Helmet>
            <div className='bg-warning my-5 mx-auto w-md-50 py-2 text-center rounded-4'>
                <h2 className='text-black fw-bold'>MY REVIEWS</h2>
            </div>
            {
                myReviews.map(myReview => <MyReviewItem
                    key={myReview._id}
                    rviwItem={myReview}
                    removeForever={removeForever}
                ></MyReviewItem>)
            }
        </div>
    );
};

export default MyReviews;