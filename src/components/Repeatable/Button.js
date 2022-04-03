import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ url, text }) => {
    return (
        <Link to={url} className="button-xl">{text}</Link>
    );
};

