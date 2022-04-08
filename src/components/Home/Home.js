import React from 'react';

import { Header } from "../Header/Header";
import { HomeWelcome } from "./HomeWelcome/HomeWelcome";
import { HomeThreeColumns } from "./HomeThreeColumns/HomeThreeColumns";
import { HomeSteps } from "./HomeSteps/HomeSteps";
import { HomeAboutUs } from "./HomeAboutUs/HomeAboutUs";
import { HomeWhoWeHelp } from "./HomeWhoWeHelp";
import { ContactUs } from "../ContactUs";
import { Footer } from "../Footer";

export const Home = () => {
    return (
        <>
            <Header />
            <HomeWelcome />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <ContactUs />
            <Footer />
        </>
    );
};
