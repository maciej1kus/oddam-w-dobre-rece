import React from 'react';
import { Link } from 'react-router-dom';

import {
    HOME_ROUTE,
    FOUR_STEPS_ROUTE,
    ABOUT_US_ROUTE,
    WHO_WE_HELP_ROUTE,
    CONTACT_ROUTE,
    LOGIN_ROUTE,
    REGISTER_ROUTE
} from "../../constants/routeNames";

import "./Header.scss";


const UP_LINK_DEFINITIONS = [
    {
        to: LOGIN_ROUTE,
        text: "Zaloguj"
    },
    {
        to: REGISTER_ROUTE,
        text: "Załóż konto"
    }
]

const DOWN_LINK_DEFINITIONS = [
    {
        to: HOME_ROUTE,
        text: "Start"
    },
    {
        to: FOUR_STEPS_ROUTE,
        text: "O co chodzi?"
    },
    {
        to: ABOUT_US_ROUTE,
        text: "O nas"
    },
    {
        to: WHO_WE_HELP_ROUTE,
        text: "Fundacja i organizacje"
    },
    {
        to: CONTACT_ROUTE,
        text: "Kontakt"
    },
]

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                    <div className="menu-up">
                        {UP_LINK_DEFINITIONS.map((link) => (
                            <Link key={link.to} to={link.to} className="up-navlinks">
                                {link.text}
                            </Link>
                        ))}
                    </div>
                    <div className="menu-down">
                        <ul className="menu-nav">
                            {DOWN_LINK_DEFINITIONS.map((link) => (
                                <Link key={link.to} to={link.to} className="down-navlinks">
                                    {link.text}
                                </Link>
                            ))}
                        </ul>
                    </div>
            </div>
        </header>
    );
};


