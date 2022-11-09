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
        fetch(`http://localhost:5000/myreviews?userEmail=${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                console.log(data);
            })
    }, [userEmail])

    const removeForever = (id) => {
        fetch(`http://localhost:5000/myreviews?reviewId=${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            <h2 className='text-center d-block fw-bold'>MY REVIEWS: {myReviews.length}</h2>
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