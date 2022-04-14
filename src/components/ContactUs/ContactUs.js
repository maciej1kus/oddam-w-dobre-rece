import React from 'react';

import { Decoration } from "../shared/Decoration/Decoration";
import { ContactForm } from "./ContactForm";


import "./ContactUs.scss";

export const ContactUs = () => {
    return (
        <div className="contact wrapper">
            <div className="contact-items">
                <div className="title">
                    <h2>Skontaktuj się z nami</h2>
                    <Decoration />
                </div>
                <div className="contact-items-form">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};
