import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import './Favorites.css';
import '../Cards/Cards.css';
import { fetchFavorites } from './favoriteSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Favorites({ user, setUser }) {
  const dispatch = useDispatch();
  const favoritedShows = useSelector((state) => state.favorites.entities)

  useEffect(() => {
  dispatch(fetchFavorites())  
  }, [])
  //if(!user) return <Login user={user} setUser={setUser} />

  return (
    <div>
      {user ? (
        <div>
          <h1 className='my-garden-title'>All Your Favorite Anime In One Spot</h1>
          <div>
            <Cards shows={favoritedShows} />
          </div>
        </div>
      ) : (
        <h1>Please Log In or Create an Account</h1>
      )
      }
    </div>
  )
}
