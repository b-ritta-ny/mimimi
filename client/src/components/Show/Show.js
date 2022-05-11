import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Show.css';


export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState([]);
  //const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:4000/animes/${id}`)
      .then((res) => res.json())
      .then((anime) => {
        //setReviews(anime.reviews)
        console.log(anime)
        setShow(anime)
      })
  }, [])
  // function handleChange(event) {
  //   setRevForm({
  //     ...revform,
  //     [event.target.name]: event.target.value,
  //   })
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   fetch("http://localhost:4000/reviews", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(revform),
  //   })
  //     .then((res) => {
  //       if(res.ok){
  //         res.json().then((newReview) => {
  //           setReviews([...reviews, newReview])
  //           setRevForm({
  //             anime_id: id,
  //             comment: "",
  //             score: "",
  //             title: ""
  //           })
  //         })
  //       }
  //     })
  // }
  return (
    <div className='show-container'>
      <div className='show-left'>
        <img src={show.image} alt={show.name} className="show-image" />
        <h1>{show.name}</h1>
      </div>
      <div className='show-details'>
        <h3>Studio {show.studio}</h3>
        <h3>Episodes {show.episodes}</h3>
        <p>{show.bio}</p>
      </div>
      
    </div>
  )
}
