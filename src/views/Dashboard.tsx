const Dashboard = () => {
    return (
        <>
            <div className="pt-24 max-w-9xl mx-auto px-4">
                <div className="flex flex-row gap-4">
                    <aside className="bg-white w-80 font-[sans-serif] overflow-auto rounded">
                        <div className="mt-4">
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

                    <div className="w-full">
                        <div className="flex flex-row mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
                                Search
                            </button>
                        </div>

                        <div className="border p-4 rounded mb-2 dark:bg-white">
                            <div className="flex flex-row items-center justify-between">
                                <div>
                                    <h3 className="text-indigo-700 text-xl font-semibold font-sans">
                                        Title
                                    </h3>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <i className="fa-regular fa-bookmark"></i>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>

                            <div className="flex flex-row gap-2 mb-3">
                                <div className="text-indigo-500">$3/hour</div>

                                <div className="text-gray-400">2 hours ago</div>
                            </div>

                            <div className="mb-4">
                                Cillum reprehenderit mollit proident aute velit
                                do. Lorem ex quis dolore veniam cupidatat
                                eiusmod amet. Laboris aliqua reprehenderit magna
                                laborum amet eiusmod est minim officia enim id
                                ullamco incididunt. Tempor adipisicing dolore
                                duis Lorem mollit velit ad excepteur eiusmod
                                pariatur do. Excepteur exercitation ad esse do
                                in velit occaecat elit laborum. Occaecat tempor
                                quis est occaecat dolor nostrud et in sit
                                officia culpa. Adipisicing voluptate nisi dolore
                                dolor cupidatat aute officia reprehenderit est
                                duis minim consectetur sint.
                            </div>

                            <div className="flex flex-row gap-2 mb-2 text-indigo-700">
                                <div>Html</div>
                                <div>CSS</div>
                                <div>JQuery</div>
                                <div>PHP</div>
                            </div>

                            <div className="text-indigo-700 font-semibold font-lg">
                                <i className="fa-solid fa-circle-check text-sm mr-1"></i>
                                <span>Verified User</span>
                                <i className="fa-solid fa-star ml-2"></i>
                                <span> 4.7</span>
                            </div>
                        </div>
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
        </>
    );
};

export default Dashboard;
