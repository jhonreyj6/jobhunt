import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../stores/store";

const Unauthenticated = () => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isLoggedIn == true) {
            navigate("/dashboard");
        }
    });

    return <>{user.isLoggedIn == false && <Outlet />}</>;
};

export default Unauthenticated;
