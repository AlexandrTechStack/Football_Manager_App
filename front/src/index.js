import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react"
import App from './App';
import mainStore from "./stores/main_store";
import optionsStore from "./stores/options_store";

const stores = {
    mainStore,
    optionsStore,
}

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root')
);


/*"proxy": "http://localhost:3001",*/