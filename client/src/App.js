import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home /Home";
import About from "./components/About/About";


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

  return (
    <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} />
      </Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="favorites" component={Favorites} />
        <Route exact path="/animes/:id" component={Show} />
        <Route exact path="" component={} />
      </Switch>
    </div>
  );
}

export default App;
