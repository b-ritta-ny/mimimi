import React from 'react';
import './Revform.css';

export default function Revform({ submit, form, change }) {
  return (
    <div>
        <div className='revform-container' id='rev-form'>
          <h3>Add Your Review Here!</h3>
                <form onSubmit={submit} className="review-form">
                    <label>Title: <input type="text" name="title" value={form.title} onChange={change} placeholder="max: 15"/></label>
                    <label>Score: <input type="text" id="score-input" name="score" value={form.score} onChange={change} placeholder="1 out of 5"/></label>
                    <label>Comment: <textarea type='text' name="comment" value={form.comment} onChange={change} placeholder="max: 100"/></label>
                    <button type='submit' id="revform-submit-btn">Submit</button>
                </form>
            </div>
    </div>
  )
}
