import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Bar from "./Containers/Bar";
import Homepage from "./Containers/Homepage";
import SelfKill from "./Views/SelfKill";
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
                    <Route path="/selfkill" component={SelfKill} />
                    <Route path="/lie" component={SelfKill} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};

export default withRoot(App);
