import React from "react";
import Login from "./Login";
import Admin from "./Admin";
import {ToastContainer} from "react-toastify";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function MainRoute() {
    return (
        <Router>
            <ToastContainer closeButton={true} position="bottom-right"/>
            <>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/admin">
                        <Admin/>
                    </Route>
                    <Route path="/admin/abc">
                        <Admin/>
                    </Route>
                </Switch>
            </>
        </Router>
    );
}
