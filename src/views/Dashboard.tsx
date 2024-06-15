import { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const userStore = useSelector((state: RootState) => state.user);

    // State
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    // Refs
    const query = useRef();

    const getJobs = async () => {
        setLoading(true);

        const AuthStr = "Bearer ".concat(userStore.access_token);
        await axios({
            method: "get",
            url: `/api/jobs/posts`,
            headers: { Authorization: AuthStr },
        })
            .then((res) => {
                setJobs(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    const createBookmark = (job) => {
        const AuthStr = "Bearer ".concat(userStore.access_token);
        axios({
            method: "POST",
            data: { id: job.id },
            url: `/api/jobs/bookmarks`,
            headers: { Authorization: AuthStr },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const searchJobs = (e) => {
        e.preventDefault();
        const AuthStr = "Bearer ".concat(userStore.access_token);
        axios({
            method: "GET",
            params: { query: query.current.value },
            url: `/api/jobs/posts/search`,
            headers: { Authorization: AuthStr },
        })
            .then((res) => {
                setJobs(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const csv = (data) => {
        const array = data.split(",");
        return array;
    };

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <>
            <div className="pt-24 max-w-9xl mx-auto px-4">
                <div className="flex flex-row gap-4">
                    <aside className="bg-white w-52 font-[sans-serif] overflow-auto rounded fixed top-0">
                        <div className="pt-24">
                            <h6 className="text-indigo-600 text-sm font-bold px-4">
                                Save Search
                            </h6>
                            <ul className="mt-2">
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        React
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Vue
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Laravel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Flutter
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h6 className="text-indigo-600 text-sm font-bold px-4">
                                Income
                            </h6>
                            <ul className="mt-2">
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Earnings and taxes
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Refunds
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Declines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Payouts Details
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h6 className="text-indigo-600 text-sm font-bold px-4">
                                Actions
                            </h6>
                            <ul className="mt-2">
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <div className="w-full ml-60">
                        <form
                            onSubmit={searchJobs}
                            className="flex flex-row mb-4"
                        >
                            <input
                                type="text"
                                ref={query}
                                className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            <button
                                type="submit"
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                            >
                                Search
                            </button>
                        </form>

                        {!loading &&
                            jobs.map((job) => {
                                return (
                                    <div
                                        className="border p-4 rounded mb-2 dark:bg-white"
                                        key={job.id}
                                    >
                                        <div className="flex flex-row items-center justify-between">
                                            <h3 className="text-indigo-700 text-xl font-semibold font-sans">
                                                {job.title}
                                            </h3>

                                            <div className="flex flex-row gap-4 items-center text-indigo-700">
                                                <a
                                                    role="button"
                                                    onClick={() => {
                                                        createBookmark(job);
                                                    }}
                                                >
                                                    <i
                                                        className={
                                                            (job.isBookmarked
                                                                ? "fa-solid"
                                                                : "fa-regular") +
                                                            " fa-bookmark"
                                                        }
                                                        onClick={(e) => {
                                                            if (
                                                                e.target.classList.contains(
                                                                    "fa-regular"
                                                                )
                                                            ) {
                                                                e.target.classList.remove(
                                                                    "fa-regular"
                                                                );
                                                                e.target.classList.add(
                                                                    "fa-solid"
                                                                );
                                                            } else {
                                                                e.target.classList.remove(
                                                                    "fa-solid"
                                                                );
                                                                e.target.classList.add(
                                                                    "fa-regular"
                                                                );
                                                            }
                                                        }}
                                                    ></i>
                                                </a>
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </div>
                                        </div>

                                        <div className="flex flex-row gap-2 mb-3">
                                            <div className="text-indigo-500">
                                                $3/hour
                                            </div>

                                            <div className="text-gray-400">
                                                2 hours ago
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            {job.description}
                                        </div>

                                        <div className="flex flex-row gap-2 mb-4 text-indigo-700">
                                            {csv(job.skills).map((skill) => {
                                                return (
                                                    <div
                                                        key={skill}
                                                        className="bg-indigo-50 px-4 rounded-full"
                                                    >
                                                        {skill}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="text-indigo-700 font-semibold text-sm">
                                            <i className="fa-solid fa-circle-check mr-1"></i>
                                            <span>Verified Client</span>
                                            <i className="fa-solid fa-star ml-2"></i>
                                            <span> 4.7</span>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                    <div className="w-[420px]">
                        <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="https://dummyimage.com/721x401"
                                alt="blog"
                            />
                            <div className="p-4 dark:bg-white">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    The 400 Blows
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <div className="flex items-center flex-wrap">
                                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                        1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                        6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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

export default Dashboard;
