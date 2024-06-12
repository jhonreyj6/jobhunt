import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "../stores/store";
import { resetState } from "../stores/userSlice";
import { useEffect } from "react";

const Nav = () => {
    const user = useSelector((state: RootState) => state.user);
    useEffect(() => {});

    const dispatch = useDispatch();
    const logout = () => {
        dispatch(resetState());
    };

    return (
        <>
            <nav className="bg-indigo-700 border-gray-200 fixed w-full z-50">
                <div className="max-w-9xl flex flex-row items-center justify-between mx-auto p-4">
                    <div className="flex flex-row gap-2 items-center w-auto">
                        <div className="h-8 w-8">
                            <NavLink to="/">
                                <img
                                    src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg"
                                    className="w-8 h-8 rounded-full"
                                    alt="Flowbite Logo"
                                />
                            </NavLink>
                        </div>

                        {!user.isLoggedIn && (
                            <>
                                <div className="text-white text-lg">
                                    <NavLink
                                        to="/about"
                                        className="py-4 px-2 hover:text-gray-400"
                                    >
                                        About
                                    </NavLink>
                                </div>
                            </>
                        )}

                        {user.isLoggedIn && (
                            <>
                                <div className="text-white text-lg">
                                    <NavLink
                                        to="/about"
                                        className="py-4 px-2 hover:text-gray-400"
                                    >
                                        Contracts
                                    </NavLink>
                                </div>

                                <div className="text-white text-lg">
                                    <NavLink
                                        to="/about"
                                        className="py-4 px-2 hover:text-gray-400"
                                    >
                                        Overview
                                    </NavLink>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="relative hidden lg:block w-full mx-32">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            className="block w-full p-2 ps-10 text-sm text-indigo-700 border border-gray-300 rounded-lg bg-indigo-100 focus:ring-blue-500 focus:border-blue-500 dark:border-indigo-600 dark:placeholder-indigo-400 focus:outline-indigo-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>

                        {!user.isLoggedIn && (
                            <>
                                <div className="text-white text-lg lg:block hidden">
                                    <NavLink
                                        to="/login"
                                        className="py-4 px-2 hover:text-gray-400"
                                    >
                                        Login
                                    </NavLink>
                                </div>

                                <div className="text-white text-lg lg:block hidden">
                                    <NavLink
                                        to="/register"
                                        className="py-4 px-2 hover:text-gray-400"
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            </>
                        )}

                        {user.isLoggedIn && (
                            <>
                                <div className="text-white text-lg lg:block hidden">
                                    <a
                                        role="button"
                                        className="py-4 px-2 hover:text-gray-400"
                                        onClick={logout}
                                    >
                                        Logout
                                    </a>
                                </div>

                                <div className="text-white lg:block hidden">
                                    <a role="button" className="py-4 px-2">
                                        <i className="fa-regular fa-bell text-xl hover:text-gray-400"></i>
                                    </a>
                                </div>

                                <div className="text-white lg:block hidden">
                                    <a role="button" className="py-4 px-2">
                                        <i className="fa-regular fa-message text-xl hover:text-gray-400"></i>
                                    </a>
                                </div>

                                <div className="text-white lg:block hidden h-auto w-8">
                                    <button
                                        role="button"
                                        className="hover:text-gray-400"
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="dropdown"
                                    >
                                        <img
                                            src="https://flowbite.com/docs/images/logo.svg"
                                            className="h-8"
                                            alt="Flowbite Logo"
                                        />
                                    </button>

                                    <div
                                        id="dropdown"
                                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                        style={{
                                            inset: "0px auto auto 40px !important",
                                            color: "red",
                                        }}
                                    >
                                        <ul
                                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownDefaultButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
