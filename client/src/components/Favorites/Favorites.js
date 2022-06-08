import React, { useEffect } from 'react';
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

  const filteredShows = favoritedShows?.reduce((acc, current) => {
    const x = acc.find(show => show.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div>
      {user ? (
        <div className='favorites-container'>
          <h1 className='favorites-title'>All Your Favorite Anime In One Spot</h1>
          <div>
            <Cards shows={filteredShows} />
          </div>
        </div>
      ) : (
        <h1 className=''>Please Log In or Create an Account</h1>
      )
      }
    </div>
  )
}
