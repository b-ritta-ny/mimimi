import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import Login from '../Login/Login';
import Reviews from '../Reviews/Reviews';
import './Show.css';
import { useDispatch } from 'react-redux';
import { postFavorite } from '../Favorites/favoriteSlice';
import { useSelector } from 'react-redux';
import { fetchShow, postReview } from './showSlice';
import Login from '../Login/Login';

export default function Show({ user, setUser }) {
  const { id } = useParams();
  const [revform, setRevForm] = useState({
    anime_id: id,
    comment: undefined,
    score: undefined,
    title: undefined
  })
  const dispatch = useDispatch();
  const show = useSelector((state) => state.shows.entities)  
  
  useEffect(() => {
    dispatch(fetchShow(id))
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
    dispatch(postReview(revform))
    setRevForm({
      anime_id: id,
      comment: "",
      score: "",
      title: ""
    })
  }
function handleAdoption() {
    let anime_id = id
    dispatch(postFavorite(anime_id))
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
            <h5>Favorited by Users like: {filteredUsers?.map((user) => (
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
        <Reviews revform={revform} reviews={show.reviews}
          handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
}
