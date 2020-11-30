import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './Content/Loginapi';
import Routing from './Routing';
const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/finalroute" component={Routing}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Router;