import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { reducers } from "./Reducers";
import { epicMiddleware, epics } from "./Epics";
import { BrowserRouter } from "react-router-dom";

const middleware = [epicMiddleware];

export const store = createStore(reducers, applyMiddleware(...middleware));

epicMiddleware.run(epics);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App" />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
