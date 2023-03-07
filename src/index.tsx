import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const rootHTML= document.getElementById('root')

if(rootHTML){
    const root = ReactDOM.createRoot(rootHTML);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}


