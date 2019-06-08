import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { reducers } from "./Reducers";
import { epicMiddleware, epics } from "./Epics";
import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Bar from "./Containers/Bar";
import Homepage from "./Views/Homepage";
import withRoot from "./Styles/WithRoot";
import "./App.css";

const middleware = [epicMiddleware];

export const store = createStore(reducers, applyMiddleware(...middleware));

epicMiddleware.run(epics);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Bar />
                <Switch>
                    <Redirect exact from="/" to="/homepage" />
                    <Route path="/homepage" component={Homepage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default withRoot(App);
