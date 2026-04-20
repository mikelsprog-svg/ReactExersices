import React from 'react';
import "./Header.css";
import {useAppContext} from "../../context/AppContext.jsx";
//aaa
export default function Header()
{
    const {userName ,theme, toggleTheme } = useAppContext();
    return (
        <header className="header">
            <div className="header__brand">
                <span className = "header__logo"> 🐾 </span>
                <div>
                    <h1 className="header__title"> AdoptMe</h1>
                    <p>Encuentra tu compañero ideal  </p>
                </div>
                <div className="header__actions">
                    <span>{userName} </span>
                    <button onClick={toggleTheme}>
                        {theme==="dark"? " Modo claro" : "Modo oscuro"}</button>
                </div>
            </div>
        </header>

);
}