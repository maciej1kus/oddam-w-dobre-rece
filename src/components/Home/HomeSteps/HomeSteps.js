// 1 grupa - zewnętrzne importy
import React from 'react';

// 2 grupa - importy z projektu, ale z innych katalogów
import { Decoration } from "../../shared/Decoration/Decoration";
import { Button } from "../../shared/Button/Button";

// 3 grupa - importy specyficzne dla tego komponentu
import { Icon } from "./Icon";
import "./HomeSteps.scss";

export const HomeSteps = () => {
    return (
        <div className="four-steps">
            <div className="title">
                <h2>Wystarczą 4 proste kroki</h2>
                <Decoration />
            </div>
            <div className="row">
                <div className="col">
                    {/* Lepiej byłoby przekazywać do tej ikonki cały obrazek jako props, taka zamiana numerka na styl jest bardzo "hermetyczna" */}
                    <Icon IconNo={1} />
                    <h4>Wybierz rzeczy</h4>
                    <span/>
                    <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                </div>
                <div className="col">
                    <Icon IconNo={2} />
                    <h4>Spakuj je</h4>
                    <p>skorzystaj z<br/>worków na śmieci</p>
                </div>
                <div className="col">
                    <Icon IconNo={3} />
                    <h4>Zdecyduj komu<br/>chcesz pomóc</h4>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="col">
                    <Icon IconNo={4} />
                    <h4>Zamów kuriera</h4>
                    <p>kurier przyjedzie<br/>w dogodnym terminie</p>
                </div>
            </div>
            <div className="button-row">
                <Button url='/login' text={`ODDAJ RZECZY`} classname={"button-xl"}/>
            </div>
        </div>
    );
};
