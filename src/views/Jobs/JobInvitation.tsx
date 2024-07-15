import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import PostCard from "../../components/PostCard";
import Ads from "../../components/Ads";

const JobInvitation = () => {
    const userStore = useSelector((state: RootState) => state.user);
    const [invitations, setInvitations] = useState([]);

    const getJobInvitation = () => {
        const AuthStr = "Bearer ".concat(userStore.access_token);
        axios({
            method: "GET",
            url: `/api/jobs/invitations`,
            headers: { Authorization: AuthStr },
        })
            .then((res) => {
                setInvitations(res.data.data);
            })
            .catch((err) => {});
    };

    const csv = (data) => {
        const array = data.split(",");
        return array;
    };

    useEffect(() => {
        getJobInvitation();
    }, []);

    return (
        <>
            <div className="max-w-7xl mx-auto pt-24 px-4">
                <div className="flex flex-row gap-4">
                    <div className="w-full">
                        <div className="w-full border p-4 mb-2">
                            <div className="flex flex-row items-center">
                                <div>
                                    <img
                                        src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                                        alt=""
                                        className="w-14 h-14"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-lg text-indigo-700">
                                        Jhon Rey Repuela
                                    </h1>
                                    <p>3 hours ago</p>
                                </div>
                            </div>
                            <p className="mb-4">
                                Non minim sint consequat culpa. Ipsum magna esse
                                anim commodo eu adipisicing non irure. Ea eu ad
                                aliqua non anim elit qui. Ea culpa qui deserunt
                                esse. Voluptate id elit irure ipsum nostrud sunt
                                duis incididunt velit sit eiusmod nulla. Fugiat
                                quis aute sint reprehenderit anim. Eu minim
                                nulla magna mollit veniam proident id
                                reprehenderit sint aute consectetur deserunt
                                Lorem laborum. Aliqua sint cupidatat deserunt
                                aliquip.
                            </p>
                            <div className="flex flex-row-reverse gap-2">
                                <button className="inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                                    Cancel
                                </button>
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-96">
                        <Ads />
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobInvitation;
