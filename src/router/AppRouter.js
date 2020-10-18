import React, { Component } from 'react';
import Header from '../components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function AppRouter() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>

            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;