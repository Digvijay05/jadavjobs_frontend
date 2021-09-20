import { Route, Switch } from "react-router-dom";
import Home from "./App";
import BlogPost from "./BlogPost";
import React from 'react'

export default function Switcher() {
    return (
        <Switch>
            <Route path="/" >
                <Home />
            </Route>
            <Route path="/posts/:id">
                <BlogPost />
            </Route>
        </Switch>
    )
}
