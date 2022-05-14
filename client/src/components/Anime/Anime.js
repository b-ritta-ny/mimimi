import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards';
import Login from '../Login/Login';
import './Anime.css'

export default function Anime({ user, setUser }) {
  const [animes, setAnimes] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/animes")
      .then((res) => res.json())
      .then((fetchedAnimes) => {
        console.log(fetchedAnimes)
        setAnimes(fetchedAnimes)
      })
  }, [])
  
    //if(!user) return <Login user={user} setUser={setUser} />

  return (
    <div className='anime-container'>
      <h1>Browse through our Collection of Popular Anime</h1>
      <Cards shows={animes} />
    </div>
  )
}
