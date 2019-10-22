import React from "react";
import { Redirect } from "react-router-dom";

export default function PrivateRoute(Component, props) {
    if (localStorage.getItem("token")) {
        return <Component {...props} />
    }

    return <Redirect to="/" />
}