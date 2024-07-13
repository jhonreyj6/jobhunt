import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ads from "../../components/Ads";

const Profile = () => {
    const [user, setUser] = useState();
    const params = useParams();

    const getUser = () => {
        axios({
            method: "GET",
            url: `/api/users/${params.id}`,
        })
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {});
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            {user && (
                <div className="max-w-7xl mx-auto px-4 pt-20">
                    <div className="flex flex-row gap-4">
                        <div className="w-full">
                            <div className="border p-8 mb-4 rounded">
                                <div className="flex flex-row gap-8 items-center">
                                    <div className="w-80 text-center">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYiPD-rqkRDL_e5r9PDjvBNnXJs0WMNW-yMJGf1Ooww&s"
                                            alt=""
                                            className="w-full h-56 rounded-full mb-3"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex flex-row justify-between items-center">
                                            <h2 className="text-indigo-700 text-3xl">
                                                {user.name}
                                            </h2>
                                        </div>
                                        <div className="text-yellow-300 mb-2">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <span className="text-indigo-700 mx-2">
                                                4.3
                                            </span>
                                            <span className="text-indigo-700">
                                                (6 reviews)
                                            </span>
                                        </div>
                                        <p className="mb-4 min-h-16 max-h-36 overflow-y-auto">
                                            {user.introduction}
                                        </p>
                                        <div className="flex flex-row gap-4 items-center">
                                            <Link
                                                to={`/user/profile/edit`}
                                                className="text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                            >
                                                <i className="fa-solid fa-square-pen"></i>
                                                <span className="ml-2">
                                                    Edit Profile
                                                </span>
                                            </Link>
                                            <button className="text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                                <i className="fa-solid fa-message"></i>
                                                <span className="ml-2">
                                                    Message
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-8 mb-4 w-full rounded">
                                <div className="flex flex-row items-center justify-between mb-4 text-indigo-700">
                                    <h2 className="text-3xl">About</h2>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row">
                                        <div className="w-96">Birthday</div>
                                        <div className="w-full">
                                            {user.birthday}
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-96">Status</div>
                                        <div className="w-full">
                                            {user.civil_status}
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-96">Address</div>
                                        <div className="w-full">
                                            {user.city} City, {user.country}
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-96">Member since</div>
                                        <div className="w-full">
                                            {new Date(
                                                user.created_at
                                            ).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="w-96">
                                            Educational Background
                                        </div>
                                        {user.educations.map((education) => {
                                            return (
                                                <div
                                                    className="w-full"
                                                    key={education.id}
                                                >
                                                    {education.course}{" "}
                                                    {education.graduate == 1
                                                        ? "(Graduate) "
                                                        : "(Undergrad) "}
                                                    {new Date(
                                                        education.year_start
                                                    ).getFullYear()}
                                                    -
                                                    {new Date(
                                                        education.year_end
                                                    ).getFullYear()}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="border p-6 mb-4 rounded">s</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
