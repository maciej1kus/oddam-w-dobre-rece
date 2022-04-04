import React from 'react';

import { HomeWelcome } from "./HomeWelcome/HomeWelcome";
import { HomeThreeColumns } from "./HomeThreeColumns/HomeThreeColumns";
import { HomeSteps } from "./HomeSteps/HomeSteps";
import { HomeDonateItems } from "./HomeDonateItems";
import { HomeAboutUs } from "./HomeAboutUs";
import { HomeWhoWeHelp } from "./HomeWhoWeHelp";
import { ContactUs } from "../ContactUs";
import { Footer } from "../Footer";

export const Home = () => {
    return (
        <>
            <HomeWelcome />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeDonateItems />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <ContactUs />
            <Footer />
        </>
    );
};
