import React from 'react'
import './Reviews.css';

export default function Reviews({ reviews, setReviews, revform, handleChange }) {

    const filteredReviews = reviews?.filter((review) => {
        if (search === "All") return true;
        return review.score === search;
    });
    function handleDelete(id) {
        fetch(`http://localhost:4000/reviews/${id}`, {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
                const updatedReviewsList = reviews?.filter((review) => {
                    return review.id !== id
                });
                setReviews(updatedReviewsList)
            }
        });
    }
    return (
        <div>
            <h2>Anime Reviews</h2>

        </div>
    )
}
