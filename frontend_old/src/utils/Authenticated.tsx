import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../stores/store";

const Authenticated = () => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isLoggedIn == false) {
            navigate("/login");
        }
    });

    return <>{user.isLoggedIn && <Outlet />}</>;
};

export default Authenticated;
