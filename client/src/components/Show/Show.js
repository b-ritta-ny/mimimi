import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Reviews from '../Reviews/Reviews';
import './Show.css';


export default function Show({ user, setUser }) {
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
  if(!user) return <Login user={user} setUser={setUser} />

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
  function handleAdoption() {
    let anime_id = id
    fetch("http://localhost:4000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ anime_id }),
    }).then((res) => res.json())
      .then((data) => console.log(data))
  }
  const filteredUsers = show?.users?.reduce((acc, current) => {
    const x = acc.find(item => item.username === current.username);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  return (
    <div className='show-container'>
      <div className='show-top'>
        <div className='show-left'>
          <img src={show.image} alt={show.name} className="show-image" />
          <h1>{show.name}</h1>
          <div>
            <NavLink to="/favorites"><button className='favorite-button' onClick={handleAdoption}><h3>Add to Favorites</h3></button></NavLink>
            <div className='users-lists'>
            <h5>Adopted by Users like: {filteredUsers?.map((user) => (
              <h4>{user.username}</h4>
            ))}</h5>
          </div>
          </div>
          
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
