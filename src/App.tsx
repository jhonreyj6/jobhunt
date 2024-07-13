import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import MainLayout from "./layouts/MainLayout";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import Profile from "./views/profile/Profile";
import Portfolio from "./views/Portfolio";
import Review from "./views/Review";
import RecentJob from "./views/jobs/RecentJob";
import Authenticated from "./layouts/Authenticated";
import Unauthenticated from "./layouts/Unauthenticated";
import Message from "./views/Message";
import Test from "./views/Test";
import JobApplication from "./views/jobs/JobApplication";
import JobBookmark from "./views/jobs/JobBookmark";
import JobInvitation from "./views/jobs/JobInvitation";
import JobContract from "./views/jobs/JobContract";
import JobProposal from "./views/JobProposal";
import ProfileEdit from "./views/profile/ProfileEdit";
import AddExperience from "./views/profile/AddExperience";

const router = createBrowserRouter([
    {
        path: "/test",
        element: <Test />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                element: <Authenticated />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                    {
                        path: "/messages",
                        element: <Message />,
                    },

                    {
                        path: "/jobs",
                        children: [
                            {
                                path: "bookmarks",
                                element: <JobBookmark />,
                            },

                            {
                                path: "invitations",
                                element: <JobInvitation />,
                            },

                            {
                                path: "contracts",
                                element: <JobContract />,
                            },

                            {
                                path: "proposals",
                                element: <JobProposal />,
                            },

                            {
                                path: "posts",
                                children: [
                                    {
                                        path: ":id",
                                        element: <JobApplication />,
                                    },
                                ],
                            },
                        ],
                    },

                    {
                        path: "/user",
                        children: [
                            {
                                path: "/user/profile/edit",
                                element: <ProfileEdit />,
                            },
                            {
                                path: "/user/profile/add/experience",
                                element: <AddExperience />,
                            },

                            {
                                path: "/user/profile/:id",
                                element: <Profile />,
                            },

                            // delete this
                            {
                                path: "/user/portfolio/:id",
                                element: <Portfolio />,
                            },

                            {
                                path: "/user/review/:id",
                                element: <Review />,
                            },
                            {
                                path: "/user/recent/job/:id",
                                element: <RecentJob />,
                            },
                            // end
                        ],
                    },
                ],
            },
            {
                element: <Unauthenticated />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/login",
                        element: <Login />,
                    },
                    {
                        path: "/register",
                        element: <Register />,
                    },
                ],
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
