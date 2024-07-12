import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { RootState } from "../stores/store";
import PostCard from "../components/PostCard";
import Ads from "../components/Ads";

const Dashboard = () => {
    const userStore = useSelector((state: RootState) => state.user);

    // State
    const [jobs, setJobs] = useState([]);

    // Refs
    const query = useRef();

    const getJobs = async () => {
        const AuthStr = "Bearer ".concat(userStore.access_token);
        await axios({
            method: "get",
            url: `/api/jobs/posts`,
            headers: { Authorization: AuthStr },
        })
            .then((res) => {
                setJobs(res.data.data);
            })
            .catch((err) => {});
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
                    <aside className="bg-white w-52 pt-24 font-[sans-serif] overflow-auto rounded fixed top-0">
                        <div
                            className="hs-accordion-group w-full flex flex-col flex-wrap"
                            data-hs-accordion-always-open
                        >
                            <ul className="space-y-1.5">
                                <li
                                    className="hs-accordion"
                                    id="account-accordion"
                                >
                                    <Disclosure>
                                        <DisclosureButton className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100">
                                            <i className="bi bi-search"></i>
                                            Saved Search
                                            <svg
                                                className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m18 15-6-6-6 6" />
                                            </svg>
                                            <svg
                                                className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </DisclosureButton>
                                        <DisclosurePanel>
                                            <div
                                                id="account-accordion"
                                                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                            >
                                                <ul className="pt-2 ps-2">
                                                    <li>
                                                        <a
                                                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                                                            href="#"
                                                        >
                                                            Link 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                                                            href="#"
                                                        >
                                                            Link 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </li>

                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 "
                                        href="#"
                                    >
                                        <svg
                                            className="size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                        </svg>
                                        Documentation
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
                                className="w-full bg-white border border-gray-300 focus:border-indigo-500 outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
                            />
                            <button
                                type="submit"
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                            >
                                Search
                            </button>
                        </form>

                        <PostCard data={jobs} />
                    </div>

                    <div className="w-[420px]">
                        <Ads />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
