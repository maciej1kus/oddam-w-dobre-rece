import { Home } from "../components/Home/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Logout } from "../components/Logout";
import { NotFound } from "../components/NotFound";

import {
    HOME_ROUTE,
    FOUR_STEPS_ROUTE,
    ABOUT_US_ROUTE,
    WHO_WE_HELP_ROUTE,
    CONTACT_ROUTE,
    LOGIN_ROUTE,
    REGISTER_ROUTE,
    LOGOUT_ROUTE,
    NOT_FOUND_ROUTE
} from "./routeNames";


// Tego użyjemy do mapowania url-i na scrollowanie do elementów oraz w klasach obiektów
// Klucze to ścieżki, a wartości to klasy, których użyjemy w elementach
// Dzięki takiej hierarchii trudniej popełnić literówki i łatwiej przepisywać kod

// Co do `ROUTES_TO_CLASSNAMES_MAP` (i ogółem nazw klas) - zazwyczaj stosuje się zasadę,
// że klasy pisze się camelCase, bo dash-case nieco zaciera czytelność kodu, więc zamiast `four-steps` lepiej użyć `FourSteps`
// W przypadku np. używania BEM klasy mogłyby wyglądać tak: `HomeSteps` (klasa główna, tak samo jak komponent)
// , `HomeSteps__wrapper` (np. kontener dla wszystkich elementów) i modyfikatory, np. `HomeSteps__wrapper--wide`
export const ROUTES_TO_CLASSNAMES_MAP = {
    [HOME_ROUTE]: "welcome",
    [FOUR_STEPS_ROUTE]: "four-steps",
    [ABOUT_US_ROUTE]: "about-us",
    [WHO_WE_HELP_ROUTE]: "who-we-help",
    [CONTACT_ROUTE]: "contact",
};

export const ROUTES = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: FOUR_STEPS_ROUTE,
        element: <Home />
    },
    {
        path: ABOUT_US_ROUTE,
        element: <Home />
    },
    {
        path: WHO_WE_HELP_ROUTE,
        element: <Home />
    },
    {
        path: CONTACT_ROUTE,
        element: <Home />
    },
    {
        path: LOGIN_ROUTE,
        element: <Login />
    },
    {
        path: REGISTER_ROUTE,
        element: <Register />
    },
    {
        path: LOGOUT_ROUTE,
        element: <Logout />
    },
    {
        path: NOT_FOUND_ROUTE,
        element: <NotFound />
    },
];