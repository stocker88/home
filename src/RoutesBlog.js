import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import AttributionBlog from './views/AttributionBlog';
import App from './App';

import history from './history';
import ScrollToTop from './ScrollToTop'


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/StockerBlog" exact component={() => AttributionBlog} />
                    <ScrollToTop >
                    <Route path="/Attribution" exact component={() => AttributionBlog} />
                    </ScrollToTop >
                </Switch>
            </Router>
        )
    }
}