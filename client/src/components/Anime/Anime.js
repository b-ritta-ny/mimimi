import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards';
import Login from '../Login/Login';
import './Anime.css'
import '../Reviews/Reviews.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchAnimes } from './animeSlice';
import Select from 'react-select';

export default function Anime({ user, setUser }) {
  const [search, setSearch] = useState("All");
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.animes.entities)

  useEffect(() => {
    dispatch(fetchAnimes())

  }, [user])

  const options = [
    { value: 'All', label: 'All' },
    { value: "Toei Animations", label: "Toei Animations" },
    { value: "Perriot", label: "Perriot" },
    { value: "Studio Sunrise", label: "Studio Sunrise" },
    { value: "Bones", label: "Bones" },
    { value: "David Production", label: "David Production" },
    { value: "MAPPA", label: "MAPPA" },
    { value: "A-1 Pictures", label: "A-1 Pictures" },
  ]
  const filteredAnimes = tvShows?.filter((anime) => {
    if (search === "All") return true;
    return anime.studio === search;
});
  //if(!user) return <Login user={user} setUser={setUser} />


  return (
    <div >
      {user ? (
        <div className='anime-container'>
        <h1 className='anime-title'>Browse through our Collection of Popular Anime</h1>
        <Select options={options} className="rev-select" onChange={(e) => setSearch(e.value)} />
        <Cards shows={filteredAnimes} /> 
        </div>
      ) : (
        <h1>Please Log In or Create an Account</h1>
      )
      }
    </div>
  )
}
