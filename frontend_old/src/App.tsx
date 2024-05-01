import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import MainLayout from "./layouts/MainLayout";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import ContactUs from "./views/ContactUs";
import Profile from "./views/Profile";
import Portfolio from "./views/Portfolio";
import Review from "./views/Review";
import ProfileLayout from "./layouts/ProfileLayout";
import RecentJob from "./views/RecentJob";
import Authenticated from "./utils/Authenticated";
import Unauthenticated from "./utils/Unauthenticated";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLayout />}>
            <Route element={<Unauthenticated />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<Authenticated />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contact/us" element={<ContactUs />} />
                <Route element={<ProfileLayout />}>
                    <Route path="/user/profile/:id" element={<Profile />} />
                    <Route path="/user/portfolio/:id" element={<Portfolio />} />
                    <Route path="/user/review/:id" element={<Review />} />
                    <Route
                        path="/user/recent/job/:id"
                        element={<RecentJob />}
                    />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
