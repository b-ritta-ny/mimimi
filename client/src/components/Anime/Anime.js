import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards';
import Login from '../Login/Login';
import './Anime.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchAnimes } from './animeSlice';

export default function Anime({ user, setUser }) {
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.animes.entities)

  useEffect(() => {
    dispatch(fetchAnimes())
  }, [])
  

  return (
    <div className='anime-container'>
      {user ? (
        <div>
        <h1>Browse through our Collection of Popular Anime</h1>
        <Cards shows={tvShows} /> 
        </div>
      ) : (
        <h1>Please Log In or Create an Account</h1>
      )
      }
    </div>
  )
}
