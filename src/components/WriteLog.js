import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { ApplicationViews } from "./ApplicationViews"
import "./WriteLog.css"

export const WriteLog = () => (
    <>
    <Route render={() => {
        if (sessionStorage.getItem("userId")) {
            return (
                <ApplicationViews />
            )
        } else {
            return <Redirect to="/login" />
        }
    }} />

    <Route exact path="/login">
        <Login />
    </Route>
    <Route exact path="/register">
        <Register />
    </Route>
    </>
)