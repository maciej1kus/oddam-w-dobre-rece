import React from 'react';
import { Link } from 'react-scroll';

export const ScrollElements = ({ url, text }) => {
    return (
        <Link to={url} className="down-navlinks" smooth={true} duration={500}>{text}</Link>
    );
};

