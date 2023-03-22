import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    let data = false

    return (
        !data ? <Navigate to={"/"} /> : <Outlet />
    )
}

export default PrivateRoute