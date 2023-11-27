import React from "react";
import {useAuth} from "../Hooks/useContext";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutes: React.FC = () => {
    const {isLoggedIn} = useAuth();
    return (
        isLoggedIn ? <Outlet/> : <Navigate to={"login"}/>
    );
};

export default PrivateRoutes;
