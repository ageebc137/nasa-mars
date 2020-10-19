import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect} from 'react';
import AppRouter from './router/AppRouter';


function App(props) {



    return (
        <>
            <AppRouter/>
        </>
    )
}

export default hot(App);