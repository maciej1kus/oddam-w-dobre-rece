import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

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
                            <li><Link to="four-steps" className="down-navlinks" smooth={true} duration={500}>O co chodzi?</Link></li>
                            <li><Link to="about-us" className="down-navlinks" smooth={true} duration={500}>O nas</Link></li>
                            <li><Link to="who-we-help" className="down-navlinks" smooth={true} duration={500}>Fundacja i organizacje</Link></li>
                            <li><Link to="contact" className="down-navlinks" smooth={true} duration={500}>Kontakt</Link></li>
                        </ul>
                    </div>
            </div>
        </header>
    );
};


