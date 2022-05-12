import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Anime from "./components/Anime/Anime";
import Favorites from "./components/Favorites/Favorites";
import Show from "./components/Show/Show";
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

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
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="favorites" component={Favorites} />
          <Route exact path="/animes/:id" component={Show} />
          <Route exact path="/animes" component={Anime} />
          <Route exact path="/signup">
            <Signup user={user} setUser={setUser} />
          </Route>
          <Route exact path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
