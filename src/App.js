import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NotFound } from "./components/NotFound";

// Staraj się spójnie używać albo funkcji albo "strzałek" tworząc komponentów (nie ma lepszych czy gorszych, po prostu wybierz jedne dla spójności ;) )
function App() {
  return (
    <HashRouter>
        <> {/* Ten fragment jest niepotrzebny, bo masz na zewnątrz HashRouter */}
          <Header />
            <Switch>
                {/* Możesz spróbować przenieść ścieżki do JS-owego pliku konfigu bądź obiektu przed funkcją App */}
                <Route exact path="/" component={Home}/>
                <Route path='/rejestracja' component={Register} />
                <Route path='/logowanie' component={Login} />
                <Route path='/wylogowano' component={Logout} />
                <Route path='*' component={NotFound} />
            </Switch>
        </>
    </HashRouter>
  );
}

export default App;
