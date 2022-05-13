import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import './Favorites.css';
import '../Cards/Cards.css'
import Login from '../Login/Login';

export default function Favorites({ user, setUser }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/favorites")
    .then((res) => res.json())
    .then((fetchedFavorites) => {
      console.log(fetchedFavorites);
      setFavorites(fetchedFavorites);
    })
  
    
  }, [])
  if(!user) return <Login user={user} setUser={setUser} />

  return (
    <div>
      <h1 className='my-garden-title'>All Your Favorite Anime In One Spot</h1>
      <div>
        <Cards shows={favorites} />
      </div>
    </div>
  )
}
