import React from 'react';
import { HomeWelcome } from "./HomeWelcome";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { HomeSteps } from "./HomeSteps";
import { HomeFourColumns } from "./HomeFourColumns";
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
            <HomeFourColumns />
            <HomeDonateItems />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <ContactUs />
            <Footer />
        </>
    );
};
