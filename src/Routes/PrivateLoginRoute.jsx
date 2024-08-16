import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";


const PrivateLoginRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    console.log(useLocation())

    if (loading) {
        return <HashLoader color="#ff0808" />
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivateLoginRoute;