import React from 'react';

// Propozycja - przenieś ten plik + to, co masz w /scss/elements/_threecolumns.scss do jednego folderu tutaj
// I nazwij oba pliki tak samo: HomeThreeColumns/HomeThreeColumns.js i HomeThreeColumns.scww
// W ten sposób będzie można pracować na komponentach w izolacji od "reszty świata" w aplikacji.
// Staraj się zawsze trzymać style specyficzne dla komponentu i komponent razem (i tak samo będzie ze specyficznymi asset-ami!)
export const HomeThreeColumns = () => {
    return (
        <div className="wrapper three-columns">
            <div className="row">
                <div className="col">
                    <h3>10</h3>
                    <h4>ODDANYCH WORKÓW</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="col">
                    <h3>5</h3>
                    <h4>WSPARTYCH ORGANIZACJI</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="col">
                    <h3>7</h3>
                    <h4>ZORGANIZOWANYCH ZBIÓREK</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    );
};
