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
        fetch(`https://service-review-server-side-henna.vercel.app/myreviews?userEmail=${userEmail}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-review-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    }, [userEmail])

    // delete review

    const removeForever = (id) => {
        fetch(`https://service-review-server-side-henna.vercel.app/myreviews?reviewId=${id}`, {
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

    const handleEditReview = (id, updatedReview) => {
        console.log(id, updatedReview);
        fetch(`https://service-review-server-side-henna.vercel.app/myreviews/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('service-review-token')}`
            },
            body: JSON.stringify({ review: updatedReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Your Review Successfully Updated! Please Reload the page to see the changes!")
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
                    handleEditReview={handleEditReview}
                ></MyReviewItem>)
            }
        </div>
    );
};

export default MyReviews;