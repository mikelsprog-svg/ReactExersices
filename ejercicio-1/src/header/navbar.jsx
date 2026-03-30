import React from 'react';
import "./header.css"

export default function Navbar()
{
    return <>
        <nav className="navbar">
            <div className="logo">
                CineReact
            </div>
            <ul className="nav-links">
                <li className="nav-item"><a href="#"> Inicio </a></li>
                <li className="nav-item"><a href="#"> Estrenos </a></li>
                <li className="nav-item"><a href="#"> Genero </a></li>
                <li className="nav-item"><a href="#"> Contacto </a></li>
        </ul>
        </nav>
    </>


}
