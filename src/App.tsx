import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Bar from "./Containers/Bar";
import Homepage from "./Containers/Homepage";
import withRoot from "./Styles/WithRoot";
import Footer from "./Components/Footer";
import Store from "./Reducers/store";
import "./App.css";

const App: React.FC = () => {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Bar />
                <Switch>
                    <Redirect exact from="/" to="/homepage" />
                    <Route path="/homepage" component={Homepage} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};

export default withRoot(App);
