import React from 'react';
import { Link } from 'react-router-dom';

// Lepszą nazwą katalogu byłby np. "shared", np. "components/shared/Button/Button.js
export const Button = ({ url, text }) => {
    return (
        <Link to={url} className="button-xl">{text}</Link>
    );
};

