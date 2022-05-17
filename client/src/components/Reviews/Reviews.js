import React, { useState } from 'react'
import './Reviews.css';
import Select from 'react-select'
import Reviewcard from './Reviewcard';
import Revform from '../Revform/Revform';
import { useDispatch } from 'react-redux';
import { reviewRemoved } from './reviewSlice';

export default function Reviews({ handleSubmit, reviews, setReviews, revform, handleChange }) {
    const [search, setSearch] = useState('All');
    const dispatch = useDispatch();

    const options = [
        { value: 'All', label: 'All' },
        { value: 5, label: 5 },
        { value: 4, label: 4 },
        { value: 3, label: 3 },
        { value: 2, label: 2 },
        { value: 1, label: 1 },
    ]

    const filteredReviews = reviews?.filter((review) => {
        if (search === "All") return true;
        return review.score === search;
    });
    function handleDelete(id) {
        dispatch(reviewRemoved(id))
    }
    
      
    return (
        <div className='reviews-container'>
            <div className='rev-title-container'>
                <div className='title-left'>
                    <h2>What'd you think of the series?</h2>
                    <h1>Let us know!</h1>
                </div>
                <Revform submit={handleSubmit} change={handleChange} form={revform}/>
            </div>
            <h1>Check out what other members had to say!</h1>
            <Select options={options} className="rev-select" onChange={(e) => setSearch(e.value)} />
            <div className='rev-container'>
                {filteredReviews?.map((review) => {
                    return (
                        <Reviewcard review={review}
                            handleDelete={handleDelete}
                            setReviews={setReviews}
                            reviews={reviews}
                            handleChange={handleChange}
                        />
                    )
                })}
            </div>
        </div>
    )
}
