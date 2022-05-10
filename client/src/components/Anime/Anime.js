import React, { useState, useEffect } from 'react'

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
        setAnimes(fetchedAnimes)
      })
  }, [])

  return (
    <div>
      
    </div>
  )
}
