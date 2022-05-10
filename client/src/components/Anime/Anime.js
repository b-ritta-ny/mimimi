import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards';

export default function Anime() {
  const [animes, setAnimes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    image: "",
    studio: "",
    episodes: ""
  });
  useEffect(() => {
    fetch("http://localhost:4000/animes")
      .then((res) => res.json())
      .then((fetchedAnimes) => {
        console.log(fetchedAnimes)
        setAnimes(fetchedAnimes)
      })
  }, [])
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:4000/animes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (res.ok){
        res.json().then((newAnimeShow) => {
          console.log(newAnimeShow)
          setAnimes([
          ...animes,
          newAnimeShow
        ])
        setFormData({
            name: "",
            bio: "",
            image: "",
            studio: "",
            episodes: "",
          })
        })
      }
      })
  }
  return (
    <div className='anime-container'>
      <h1>Browse through our Collection of Popular Anime</h1>
      <Cards shows={animes} />
    </div>
  )
}
