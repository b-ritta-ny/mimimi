import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards';
import Login from '../Login/Login';
import './Anime.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchAnimes } from './animeSlice';

export default function Anime({ user, setUser }) {
  const [animes, setAnimes] = useState([]);
  const dispatch = useDispatch();
  const cartoons = useSelector((state) => state.animes.entities)
  console.log(cartoons)

  useEffect(() => {
    fetch("http://localhost:4000/animes")
      .then((res) => {
        if (res.ok){
          res.json().then((fetchedAnimes) => {
              console.log(fetchedAnimes)
              setAnimes(fetchedAnimes)
            })
        }
      })
  }, [])
  

  return (
    <div className='anime-container'>
      {user ? (
        <div>
        <h1>Browse through our Collection of Popular Anime</h1>
        <Cards shows={animes} /> 
        </div>
      ) : (
        <h1>Please Log In or Create an Account</h1>
      )
      }
    </div>
  )
}
