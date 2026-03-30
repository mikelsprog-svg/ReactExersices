import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Footer from './footer/Footer.jsx'
import Navbar from './header/navbar.jsx'
import './App.css'

function App() {
  return (
      <div className="app-layout">
        <Navbar/>
        <Footer/>
      </div>
  );
}

export default App
