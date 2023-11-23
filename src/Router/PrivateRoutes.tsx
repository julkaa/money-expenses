import {Navigate} from "react-router-dom";
import {FC} from "react";
import HomePage from "../components/HomePage/HomePage";

const PrivateRoutes: FC = () => {
    console.log(localStorage.getItem('isLoggedIn'));
    return (
        localStorage.getItem('isLoggedIn') ? <HomePage/> : <Navigate to="/login"/>
    );
};

export default PrivateRoutes;
