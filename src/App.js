import { hot } from 'react-hot-loader/root';
import React from 'react';
import AppRouter from './router/AppRouter';

function App(props) {
    return (
        <>
            <AppRouter />
        </>
    )
}

export default hot(App);