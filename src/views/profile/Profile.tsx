import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import Stars from "../../components/Stars";

const Profile = () => {
    const [user, setUser] = useState();
    const params = useParams();
    const [reviews, setReviews] = useState([]);

    const getJobReviews = (rating = 5) => {
        axios({
            method: "GET",
            params: {
                rating: rating,
            },
            url: `/api/users/${params.id}/reviews`,
        })
            .then((res) => {
                setReviews(res.data.data);
            })
            .catch((err) => {});
    };

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

    // const forLoop = (data) => {
    //     for (let i = 0; i < data.length; i++) {
    //         console.log("yes");

    //         return true;
    //     }
    // };

    useEffect(() => {
        getUser();
        getJobReviews();
    }, []);

    return (
        <>
            {user && (
                <div className="max-w-9xl mx-auto px-4 pt-20">
                    <div className="flex flex-row gap-4">
                        <div className="w-full">
                            <div className="border p-8 mb-4 rounded shadow-md">
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

                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <div className="border p-8 mb-4 w-full rounded shadow-md">
                                        <div className="flex flex-row items-center justify-between mb-4 text-indigo-700">
                                            <h2 className="text-3xl">About</h2>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row">
                                                <div className="w-96">
                                                    Birthday
                                                </div>
                                                <div className="w-full">
                                                    {user.birthday}
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <div className="w-96">
                                                    Status
                                                </div>
                                                <div className="w-full">
                                                    {user.civil_status}
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <div className="w-96">
                                                    Address
                                                </div>
                                                <div className="w-full">
                                                    {user.city} City,{" "}
                                                    {user.country}
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <div className="w-96">
                                                    Member since
                                                </div>
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
                                                {user.educations.map(
                                                    (education) => {
                                                        return (
                                                            <div
                                                                className="w-full"
                                                                key={
                                                                    education.id
                                                                }
                                                            >
                                                                {
                                                                    education.course
                                                                }{" "}
                                                                {education.graduate ==
                                                                1
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
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 border shadow">
                                        <div className="flex flex-col gap-2">
                                            <button className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                                Github
                                            </button>
                                            <button className="w-full bg-red-600 border border-red-400 text-white py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
                                                Youtube
                                            </button>
                                            <button className="w-full bg-white border border-slate-400 text-gray-700 py-2 px-6 focus:outline-none hover:border-slate-600 hover:text-gray-950 rounded text-lg">
                                                Stackoverflow
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <div className="border mb-4 rounded shadow-md">
                                        <div className="w-full">
                                            <Swiper
                                                className="mySwiper swiper-h"
                                                modules={[Pagination]}
                                                pagination={true}
                                            >
                                                <SwiperSlide>
                                                    <img
                                                        src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg"
                                                        alt=""
                                                    />
                                                    <div className="w-5/6">
                                                        Culpa sunt duis sit
                                                        officia deserunt nisi
                                                        velit reprehenderit
                                                        cillum dolor.
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Swiper
                                                        className="mySwiper2 swiper-v"
                                                        direction={"vertical"}
                                                        pagination={true}
                                                        modules={[Pagination]}
                                                    >
                                                        <SwiperSlide>
                                                            <img
                                                                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg"
                                                                alt=""
                                                                className="w-full h-32"
                                                            />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img
                                                                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg"
                                                                alt=""
                                                                className="w-full h-32"
                                                            />
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="border shadow">
                                        <div className="flex flex-row mb-4">
                                            <button className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
                                                5 Star
                                            </button>
                                            <button
                                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                                onClick={() => {
                                                    getJobReviews(4);
                                                }}
                                            >
                                                4 Star
                                            </button>
                                            <button
                                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                                onClick={() => {
                                                    getJobReviews(3);
                                                }}
                                            >
                                                3 Star
                                            </button>
                                            <button
                                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                                onClick={() => {
                                                    getJobReviews(2);
                                                }}
                                            >
                                                2 Star
                                            </button>
                                            <button
                                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                                onClick={() => {
                                                    getJobReviews(1);
                                                }}
                                            >
                                                1 Star
                                            </button>
                                        </div>
                                        {reviews.map((review) => {
                                            return (
                                                <div
                                                    className="border p-4 border-indigo-700 rounded-lg"
                                                    key={review.id}
                                                >
                                                    <div className="flex flex-row">
                                                        <div className="w-20">
                                                            <img
                                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYiPD-rqkRDL_e5r9PDjvBNnXJs0WMNW-yMJGf1Ooww&s"
                                                                alt=""
                                                                className="w-full h-12"
                                                            />
                                                        </div>

                                                        <div className="ml-6">
                                                            <h1 className="font-semibold text-lg text-indigo-700">
                                                                {
                                                                    review.user
                                                                        .name
                                                                }
                                                            </h1>
                                                            <p className="mb-4">
                                                                {review.message}
                                                            </p>
                                                            <Stars
                                                                rate={
                                                                    review.rating
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
};

export default Profile;
