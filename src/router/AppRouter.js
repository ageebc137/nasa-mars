import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NavHeader from '../components/NavHeader';
import Curiosity from '../components/Curiosity';
import Opportunity from '../components/Opportunity';
import Spirit from '../components/Spirit';

function AppRouter() {
    return (
        <BrowserRouter>
            <NavHeader />
            <Switch>
                <Route path="/curiosity"  component={Curiosity} />
                <Route path="/opportunity" component={Opportunity} />
                <Route path="/spirit" component={Spirit} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;