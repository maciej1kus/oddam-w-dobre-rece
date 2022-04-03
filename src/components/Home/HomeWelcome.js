import React from 'react';
// Linijka wolnego ;)
import { Button } from '../Repeatable/Button';

// Tak jak z Three Columns - do przeniesienia do jednego folderu z SCSS i z grafikami używanymi w tym komponencie.
// W folderze ma być wszystko, co jest specyficzne dla danego komponentu i nie będzie użyte w innych.
export const HomeWelcome = () => {
    return (
        <section className="welcome">
            <div className="welcome-left"/>
            <div className="welcome-right">
                <div className="welcome-right-box">
                    <div className="title">
                        <h2>Zacznij pomagać!</h2>
                        <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <div className="decoration"/>
                    </div>
                    <div className="welcome-buttons">
                        <Button url='/logowanie' text={`ODDAJ RZECZY`} />
                        <Button url='/logowanie' text={`ZORGANIZUJ ZBIÓRKĘ`} />
                    </div>
                </div>
            </div>
        </section>
    );
};
