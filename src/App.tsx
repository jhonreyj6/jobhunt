import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import MainLayout from "./layouts/MainLayout";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import Profile from "./views/Profile";
import Portfolio from "./views/Portfolio";
import Review from "./views/Review";
import ProfileLayout from "./layouts/ProfileLayout";
import RecentJob from "./views/RecentJob";
import Authenticated from "./utils/Authenticated";
import Unauthenticated from "./utils/Unauthenticated";
import Message from "./views/Message";
import Test from "./views/Test";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route element={<MainLayout />}>
//             <Route element={<Unauthenticated />}>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//             </Route>

//             <Route element={<Authenticated />}>
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route element={<ProfileLayout />}>
//                     <Route path="/user/profile/:id" element={<Profile />} />
//                     <Route path="/user/portfolio/:id" element={<Portfolio />} />
//                     <Route path="/user/review/:id" element={<Review />} />
//                     <Route
//                         path="/user/recent/job/:id"
//                         element={<RecentJob />}
//                     />
//                 </Route>
//             </Route>

//             <Route path="*" element={<NotFound />} />
//         </Route>
//     )
// );

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
                        element: <ProfileLayout />,
                        children: [
                            {
                                path: "/user/profile/:id",
                                element: <Profile />,
                            },
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
                        path: "/",
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
