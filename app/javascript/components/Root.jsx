import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { configureStore } from '../redux/store/store';


const Root = () => (
    <Provider store={configureStore()}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

export default Root