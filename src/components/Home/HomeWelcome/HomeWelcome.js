import React from 'react';

import { Button } from '../../shared/Button/Button';
import { Decoration } from "../../shared/Decoration/Decoration";
import "./HomeWelcome.scss";


export const HomeWelcome = () => {
    return (
        <section className="welcome">
            <div className="welcome-left"/>
            <div className="welcome-right">
                <div className="welcome-right-box">
                    <div className="title">
                        <h2>Zacznij pomagać!</h2>
                        <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <Decoration />
                    </div>
                    <div className="welcome-buttons">
                        <Button url='/logowanie' text={`ODDAJ RZECZY`} classname={"button-xl"}/>
                        <Button url='/logowanie' text={`ZORGANIZUJ ZBIÓRKĘ`} classname={"button-xl"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
