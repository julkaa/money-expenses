import {Navigate, Outlet} from "react-router-dom";
import {FC} from "react";

interface PublicRoutesProps {
    isLoggedIn: boolean
}

const PublicRoutes: FC<PublicRoutesProps> = (isLoggedIn) => {
    return (
        isLoggedIn ? <Navigate to={"/home"}/> : <Outlet/>
    );
};

export default PublicRoutes;
