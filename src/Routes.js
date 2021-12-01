import React, { Component } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import AttributionBlog from './views/AttributionBlog';
import PrivacyPolicySection from './views/PrivacyPolicySection';
import App from './App';

import history from './history';
import ScrollToTop from './ScrollToTop'


function Routes() {
        return (
            <HashRouter history={history}>
                <Switch>
                    <Route path="/" exact component={() => <App/>} />
                    <Route path="/privacy_policy" exact component={() => <PrivacyPolicySection/>} />
                <ScrollToTop>    <Route path="/Attribution" exact component={() => <AttributionBlog/>} /> </ScrollToTop>
                <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }

export default Routes