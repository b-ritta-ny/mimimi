import React, { useEffect } from 'react'
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
  }, [setUser])
  
  if(!user) return <Login user={user} setUser={setUser} />


  return (
    <div >
      {user ? (
        <div className='anime-container'>
        <h1 className='anime-title'>Browse through our Collection of Popular Anime</h1>
        <Cards shows={tvShows} /> 
        </div>
      ) : (
        <h1>Please Log In or Create an Account</h1>
      )
      }
    </div>
  )
}
