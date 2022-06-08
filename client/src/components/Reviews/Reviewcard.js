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
    }

    return (
        // each individual review and it's information 
        <div className='review-card' key={review.id}>
            <h1 className='review-title'>{review.title}</h1>
            <h4 className='review-comment'>{review.comment}</h4>
            <h5 className='author'>by: {review?.author}</h5>
            <h3>Rated {review.score} out of 5!</h3>
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
                        <label>Rate 1 out of 5: <input type="text" name="score" value={updated.score} onChange={handleFormChange} /></label>
                        <label>Comment:<h6>max(100)</h6> <textarea type='text' name="comment" value={updated.comment} onChange={handleFormChange} /></label>
                        <button type='submit' id="revform-submit-btn">Submit</button>
                    </form>
                </div> : ""}
        </div>
    )
}
