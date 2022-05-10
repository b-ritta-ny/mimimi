import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Anime from "./components/Anime/Anime";
import Favorites from "./components/Favorites/Favorites";
import Show from "./components/Show/Show";
import Navbar from './components/Navbar/Navbar';

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => { 
  //    //auto-login
  //   fetch("/auth").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
  //if(!user) return <Welcome setUser={setUser}/>

  return (
    <div className="App">
      
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="/animes/:id" element={<Show />}/>
          <Route path="/animes" element={<Anime />}/>
        </Routes>

    </div>
  );
}

export default App;
