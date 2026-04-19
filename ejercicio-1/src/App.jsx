import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Footer from './footer/Footer.jsx'
import Navbar from './header/navbar.jsx'
import './App.css'
import MovieCard from "./moviegrid/MovieCard.jsx";
import MovieGrid from "./moviegrid/MovieGrids.jsx";
import {movies} from "./data/movies.js";
import {genres} from "./data/movies.js"
import Sidebar from "./sidebar/Sidebar.jsx";

function App() {
  return (
      <div className="app-layout">
        <Navbar/>
        <MovieGrid movies={movies}/>
        <Sidebar genres={genres}/>
        <Footer/>
      </div>
  );
}

export default App
