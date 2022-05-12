import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import './Show.css';


export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [revform, setRevForm] = useState({
    anime_id: id,
    comment: undefined,
    score: undefined,
    title: undefined
  })

  useEffect(() => {
    fetch(`http://localhost:4000/animes/${id}`)
      .then((res) => res.json())
      .then((anime) => {
        setReviews(anime.reviews)
        console.log(anime)
        setShow(anime)
      })
  }, [])
  function handleChange(event) {
    setRevForm({
      ...revform,
      [event.target.name]: event.target.value,
    })
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(revform),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((newReview) => {
            setReviews([...reviews, newReview])
            setRevForm({
              anime_id: id,
              comment: "",
              score: "",
              title: ""
            })
          })
        }
      })
  }
  return (
    <div className='show-container'>
      <div className='show-top'>
        <div className='show-left'>
          <img src={show.image} alt={show.name} className="show-image" />
          <h1>{show.name}</h1>
        </div>
        <div className='show-details'>
          <h3>Created by: {show.creator}</h3>
          <h3>Studio {show.studio}</h3>
          <h3>Episodes {show.episodes}</h3>
          <p>{show.bio}</p>
        </div>
      </div>
      <div className='reviews-div-container'>
        <Reviews reviews={reviews} setReviews={setReviews} revform={revform}
          handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
}
