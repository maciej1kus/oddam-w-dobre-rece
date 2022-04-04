import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NotFound } from "./components/NotFound";

const App = () => {
  return (
    <HashRouter>
          <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/rejestracja' component={Register} />
                <Route path='/logowanie' component={Login} />
                <Route path='/wylogowano' component={Logout} />
                <Route path='*' component={NotFound} />
            </Switch>
    </HashRouter>
  );
}

export default App;
