import React from 'react';
import { Route, Routes } from "react-router-dom";
import Leagues from './components/Leagues';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import './style.css';
import Games from './components/Games';
import Teams from './components/Teams';
import { Navbar } from 'react-bootstrap';
import VideoGameLeague from './components/VideoGameLeague';
import Matches from './components/Matches';
import 'bootstrap/dist/css/bootstrap.min.css';
import Series from './components/Series';
import Login from './components/Login';
import Players from './components/Players';



function App() {
  return (
    <div>
        <Navbar/>
          <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/leagues" element={<Leagues/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/games/:id" element={<VideoGameLeague/>}/>
            <Route path="/teams" element={<Teams/>}/>
            <Route path="/matches" element={<Matches/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
    </div>

  );
}

export default App;
