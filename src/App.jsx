import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Main from "./Components/Main";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </Router>
    );
}
 
export default App;
