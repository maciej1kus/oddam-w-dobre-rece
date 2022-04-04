import React from 'react';
import { NavLink } from 'react-router-dom';

import { ScrollElements } from "../../constants/scroll-elements";
import "./Header.scss";


export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                    <div className="menu-up">
                        <NavLink to="logowanie" className="up-navlinks">Zaloguj</NavLink>
                        <NavLink to="rejestracja" className="up-navlinks">Załóż konto</NavLink>
                    </div>
                    <div className="menu-down">
                        <ul className="menu-nav">
                            <li><NavLink to="/" className="down-navlinks">Start</NavLink></li>
                            <li><ScrollElements url="four-steps" text={"O co chodzi?"}/></li>
                            <li><ScrollElements url="about-us" text={"O nas"}/></li>
                            <li><ScrollElements url="who-we-help" text={"Fundacja i organizacje"}/></li>
                            <li><ScrollElements url="contact" text={"Kontakt"}/></li>
                        </ul>
                    </div>
            </div>
        </header>
    );
};


