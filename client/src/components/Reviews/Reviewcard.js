import React, { useState } from 'react';
import './Reviews.css';
import { useDispatch } from 'react-redux';
import { updateReview } from '../Show/showSlice';

export default function Reviewcard({ review, handleDelete, reviews }) {
    const [trigger, setTrigger] = useState(false);
    const [updated, setUpdated] = useState({
        comment: review.comment,
        title: review.title,
        score: review.score,
        author: review.author,
        review_id: review.id
    })
    const dispatch = useDispatch();

    function handleFormChange(event) {
        setUpdated({
            ...updated,
            [event.target.name]: event.target.value,
        })
    }
    function handleEditClick() {
        setTrigger(!trigger)
    }
    function handleUpdateSubmission(event) {
        event.preventDefault()
        dispatch(updateReview(updated))
        setTrigger(!trigger)
        // const updatedReviewsList = reviews?.filter((singleReview) => {
        //     return singleReview.id !== review.id 
        //     });
        
        
    }

    return (
        // each individual review and it's information 
        <div className='review-card' key={review.id}>
            <h1>{review.title}</h1>
            <p className='review-comment'>{review.comment}</p>
            <h3>Rated {review.score} out of 5!</h3>
            <h3>by: {review?.author}</h3>
            <div className='review-buttons-div'>
                <button onClick={() => handleDelete(review.id)}>Delete</button>
                <button onClick={handleEditClick}>Edit</button>
            </div>
            {/* this is the edit pop-up section controlled by trigger variable  */}
            {trigger ?
                <div className='revform-container' id='rev-form'>
                    <h1>Update Your Review</h1>
                    <form onSubmit={(event) => handleUpdateSubmission(event)}>
                        <label>Title: <input type="text" name="title" value={updated.title} onChange={handleFormChange} /></label>
                        <label>Score: <input type="text" name="score" value={updated.score} onChange={handleFormChange} /></label>
                        <label>Comment: <textarea type='text' name="comment" value={updated.comment} onChange={handleFormChange} /></label>
                        <button type='submit' id="revform-submit-btn">Submit</button>
                    </form>
                </div> : ""}
        </div>
    )
}
