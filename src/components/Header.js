import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <nav>
                    <div className="nav-login">
                        <Link to="logowanie" className="navli">Zaloguj się</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};


