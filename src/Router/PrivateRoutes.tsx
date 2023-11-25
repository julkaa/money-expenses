import {Navigate, Outlet} from "react-router-dom";
import {FC} from "react";
import {useAuth} from "../Hooks/useContext";

const PrivateRoutes: FC = () => {
    const {isLoggedIn} = useAuth();
    return (
        isLoggedIn ? <Outlet/> : <Navigate to={"login"}/>
    );
};

export default PrivateRoutes;
