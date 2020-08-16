import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";
//pages
import Root from "../pages/root/root";
import Index from "../pages/index/index"

import history from "./history"

export default class Routes extends Component {
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Index}/>
                    <Route path="/Main" exact component={Root}/>
                </Switch>
            </Router>
        )
    }
}