import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useNavigate, useParams } from "react-router-dom";

const JobDetails = () => {
    const userStore = useSelector((state: RootState) => state.user);

    const [job, setJob] = useState();
    const [rate, setRate] = useState();
    const [timeFrame, setTimeFrame] = useState();
    const [message, setMessage] = useState();
    const params = useParams();
    const navigate = useNavigate();

    const getJob = async () => {
        const AuthStr = "Bearer ".concat(userStore.access_token);
        await axios({
            method: "GET",
            url: `/api/jobs/posts/${params.id}`,
            headers: { Authorization: AuthStr },
        })
            .then((res) => {
                setJob(res.data);
            })
            .catch((err) => {});
    };

    const submitProposal = async () => {
        const AuthStr = "Bearer ".concat(userStore.access_token);
        await axios({
            method: "POST",
            data: {
                rate_offer: rate,
                time_frame: timeFrame,
                message: message,
            },
            url: `/api/jobs/posts/${job.slug}/apply`,
            headers: { Authorization: AuthStr },
        })
            .then((res) => {
                navigate("/dashboard");
            })
            .catch((err) => {});
    };

    const csv = (data) => {
        const array = data.split(",");
        return array;
    };

    useEffect(() => {
        getJob();
    }, []);

    return (
        <>
            <div className="pt-20 max-w-9xl mx-auto px-4">
                <div className="flex flex-row gap-4">
                    <div className="w-full">
                        <div className="border p-4 rounded mb-4">
                            <div className="flex flex-row items-center justify-between">
                                <h1 className="text-indigo-700 text-xl font-semibold font-sans">
                                    {job?.title}
                                </h1>
                                <div className="flex flex-row items-center gap-4">
                                    <i className="fa-regular fa-bookmark"></i>
                                    <i className="fa-regular fa-flag"></i>
                                </div>
                            </div>

                            <div className="flex flex-row gap-2 mb-3">
                                <div className="text-indigo-500">
                                    ${job?.min_rate} - ${job?.max_rate} / hour
                                </div>
                                <div className="text-gray-400">2 hours ago</div>
                            </div>

                            <p className="mb-4">{job?.description}</p>

                            <div className="flex flex-row gap-4 mb-4 text-indigo-700">
                                <div className="w-full">
                                    <div>Skill Level: {job?.skill_level}</div>
                                    <div className="mb-2">
                                        Working Hours:
                                        {" " + job?.working_hours + " "}
                                        Hours / Week
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <h1 className="mb-1">
                                            Skills Required:
                                        </h1>
                                        <div className="grid grid-cols-4 gap-2">
                                            {job &&
                                                csv(job.skills).map((skill) => {
                                                    return (
                                                        <div
                                                            key={skill}
                                                            className="bg-indigo-50 px-2 text-center rounded-full"
                                                        >
                                                            {skill}
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border p-4 mb-4 rounded">
                            <h1 className="text-xl text-indigo-700 mb-4">
                                Your bid in this project
                            </h1>

                            <div className="flex flex-row gap-4 mb-4">
                                <div className="text-indigo-700 w-full">
                                    <input
                                        type="number"
                                        id="rate"
                                        onKeyUp={(e) => {
                                            setRate(e.target.value);
                                        }}
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out mb-2"
                                    />
                                    <div className="text-sm">
                                        Client Budget Range: ${job?.min_rate} -
                                        ${job?.max_rate} / Hour
                                    </div>
                                </div>

                                <div className="text-indigo-700 w-full">
                                    <input
                                        type="number"
                                        id="time_frame"
                                        onKeyUp={(e) => {
                                            setTimeFrame(e.target.value);
                                        }}
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out mb-2"
                                    />
                                    <div className="text-sm">
                                        Time Frame in Hours
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full flex flex-col gap-2 mb-4">
                                <label
                                    htmlFor="proposal"
                                    className="leading-7 text-lg font-semi-bold text-indigo-700"
                                >
                                    Message Proposal:
                                </label>
                                <textarea
                                    id="proposal"
                                    cols="30"
                                    rows="10"
                                    onKeyUp={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                    className="border resize-none rounded focus:outline-indigo-700 px-4 py-2"
                                ></textarea>
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Submit Proposal
                            </button>
                        </div>
                    </div>
                    <div className="w-96">
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                            <div className="flex flex-col items-center pb-10 mt-8">
                                <img
                                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                    alt="Bonnie image"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900">
                                    Bonnie Green
                                </h5>
                                <span className="text-sm text-gray-500">
                                    @plummetworks
                                </span>

                                <div className="flex items-center mb-2">
                                    <svg
                                        className="w-4 h-4 text-yellow-300 me-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 me-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 me-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 me-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    4.95 out of 5
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;
