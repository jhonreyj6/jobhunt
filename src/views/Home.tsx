import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className="px-8 pt-32">
                <div className="flex flex-row gap-4 items-center mb-8 max-w-7xl mx-auto">
                    <div className="w-full px-4">
                        <h1 className="text-3xl font-semibold">
                            Never work a day in your life
                        </h1>
                        <p className="text-gray-700 mb-4">- Mark Twain</p>
                        <p className="mb-8">
                            Do in amet laboris amet Lorem consectetur dolor amet
                            reprehenderit laborum culpa labore eu. Ad anim do
                            nostrud ullamco consequat ut aliquip quis et mollit
                            cillum ea id Lorem.
                        </p>
                        <div className="flex flex-row gap-4 items-center">
                            <div className="relative mb-4 w-full">
                                <label
                                    htmlFor="job"
                                    className="leading-7 font-semibold"
                                >
                                    Job Title / Company Name
                                </label>
                                <input
                                    type="text"
                                    id="job"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4 w-full">
                                <label
                                    htmlFor="location"
                                    className="leading-7 font-semibold"
                                >
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <button className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Search
                        </button>
                    </div>
                    <div className="w-full">
                        <img
                            src="/img/job.avif"
                            className="h-96 w-full"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="bg-indigo-50 mb-8">
                <div className="px-4 py-8 max-w-7xl mx-auto">
                    <h2 className="text-center mb-4 mx-auto text-2xl font-semibold">
                        Browse Categories
                    </h2>
                    <p className="text-center mb-8">
                        Most popular categories of portal, sorted by popularity
                    </p>
                    <div className="grid grid-cols-3 mb-8">
                        <div className="col-span-1 border border-indigo-700 p-4 text-center">
                            <div className="bg-indigo-700 w-16 mx-auto mb-2 px-2 py-3 rounded-full">
                                <i className="fa-solid fa-landmark text-3xl text-white"></i>
                            </div>
                            <div className="mb-1 text-xl font-semibold">
                                Finance
                            </div>
                            <div className="">5000+ Jobs</div>
                        </div>
                        <div className="col-span-1 border border-indigo-700 p-4 text-center">
                            <div className="bg-indigo-700 w-16 mx-auto mb-2 px-2 py-3 rounded-full">
                                <i className="fa-solid fa-landmark text-3xl text-white"></i>
                            </div>
                            <div className="mb-1 text-xl font-semibold">
                                Finance
                            </div>
                            <div className="">5000+ Jobs</div>
                        </div>
                        <div className="col-span-1 border border-indigo-700 p-4 text-center">
                            <div className="bg-indigo-700 w-16 mx-auto mb-2 px-2 py-3 rounded-full">
                                <i className="fa-solid fa-landmark text-3xl text-white"></i>
                            </div>
                            <div className="mb-1 text-xl font-semibold">
                                Finance
                            </div>
                            <div className="">5000+ Jobs</div>
                        </div>
                        <div className="col-span-1 border border-indigo-700 p-4 text-center">
                            <div className="bg-indigo-700 w-16 mx-auto mb-2 px-2 py-3 rounded-full">
                                <i className="fa-solid fa-landmark text-3xl text-white"></i>
                            </div>
                            <div className="mb-1 text-xl font-semibold">
                                Finance
                            </div>
                            <div className="">5000+ Jobs</div>
                        </div>
                        <div className="col-span-1 border border-indigo-700 p-4 text-center">
                            <div className="bg-indigo-700 w-16 mx-auto mb-2 px-2 py-3 rounded-full">
                                <i className="fa-solid fa-landmark text-3xl text-white"></i>
                            </div>
                            <div className="mb-1 text-xl font-semibold">
                                Finance
                            </div>
                            <div className="">5000+ Jobs</div>
                        </div>
                        <div className="col-span-1 border border-indigo-700 p-4 text-center">
                            <div className="bg-indigo-700 w-16 mx-auto mb-2 px-2 py-3 rounded-full">
                                <i className="fa-solid fa-landmark text-3xl text-white"></i>
                            </div>
                            <div className="mb-1 text-xl font-semibold">
                                Finance
                            </div>
                            <div className="">5000+ Jobs</div>
                        </div>
                    </div>

                    <div className="mt-4 text-center mb-4">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Browse All Categories
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mb-8">
                <h2 className="text-2xl font-semibold text-center mb-4">
                    How it works?
                </h2>

                <p className="text-center mb-8">
                    Reprehenderit occaecat in occaecat fugiat eiusmod deserunt
                    proident eu fugiat laboris dolor.
                </p>

                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 border py-6 px-8 flex flex-row gap-8 items-center">
                        <div className="w-60">
                            <i className="fas fa-user text-5xl text-indigo-700"></i>
                        </div>
                        <div>
                            <h3 className="text-indigo-700 text-xl font-semibold mb-2">
                                Create account
                            </h3>
                            <p>
                                Sint qui aute labore Lorem labore qui dolor sit
                                qui pariatur laboris in. Adipisicing velit ad
                                duis et eiusmod duis enim voluptate excepteur
                                enim Lorem magna quis ad.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 border py-6 px-8 flex flex-row gap-8 items-center">
                        <div className="w-60">
                            <i className="fas fa-user text-5xl text-indigo-700"></i>
                        </div>
                        <div>
                            <h3 className="text-indigo-700 text-xl font-semibold mb-2">
                                Create account
                            </h3>
                            <p>
                                Sint qui aute labore Lorem labore qui dolor sit
                                qui pariatur laboris in. Adipisicing velit ad
                                duis et eiusmod duis enim voluptate excepteur
                                enim Lorem magna quis ad.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 border py-6 px-8 flex flex-row gap-8 items-center">
                        <div className="w-60">
                            <i className="fas fa-user text-5xl text-indigo-700"></i>
                        </div>
                        <div>
                            <h3 className="text-indigo-700 text-xl font-semibold mb-2">
                                Create account
                            </h3>
                            <p>
                                Sint qui aute labore Lorem labore qui dolor sit
                                qui pariatur laboris in. Adipisicing velit ad
                                duis et eiusmod duis enim voluptate excepteur
                                enim Lorem magna quis ad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <section className="text-gray-600 body-font bg-indigo-100 py-12 overflow-hidden">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-col text-center w-full mb-8">
                            <h1 className="text-2xl font-semibold title-font mb-2 text-gray-900">
                                Pricing
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                                Whatever cardigan tote bag tumblr hexagon
                                brooklyn asymmetrical.
                            </p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="p-4 xl:w-1/4 md:w-1/2 w-full bg-white">
                                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                        START
                                    </h2>
                                    <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                                        Free
                                    </h1>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Vexillologist pitchfork
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Tumeric plaid portland
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-6">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Mixtape chillwave tumeric
                                    </p>
                                    <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                        Button
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-auto"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p className="text-xs text-gray-500 mt-3">
                                        Literally you probably haven't heard of
                                        them jean shorts.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 xl:w-1/4 md:w-1/2 w-full bg-white">
                                <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                                        POPULAR
                                    </span>
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                        PRO
                                    </h2>
                                    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span></span>
                                        <span className="text-lg ml-1 font-normal text-gray-500">
                                            /mo
                                        </span>
                                    </h1>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Vexillologist pitchfork
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Tumeric plaid portland
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Hexagon neutra unicorn
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-6">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Mixtape chillwave tumeric
                                    </p>
                                    <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                                        Button
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-auto"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p className="text-xs text-gray-500 mt-3">
                                        Literally you probably haven't heard of
                                        them jean shorts.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 xl:w-1/4 md:w-1/2 w-full bg-white">
                                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                        BUSINESS
                                    </h2>
                                    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span></span>
                                        <span className="text-lg ml-1 font-normal text-gray-500">
                                            /mo
                                        </span>
                                    </h1>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Vexillologist pitchfork
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Tumeric plaid portland
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Hexagon neutra unicorn
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Vexillologist pitchfork
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-6">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Mixtape chillwave tumeric
                                    </p>
                                    <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                        Button
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-auto"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p className="text-xs text-gray-500 mt-3">
                                        Literally you probably haven't heard of
                                        them jean shorts.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 xl:w-1/4 md:w-1/2 w-full bg-white">
                                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                        SPECIAL
                                    </h2>
                                    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span></span>
                                        <span className="text-lg ml-1 font-normal text-gray-500">
                                            /mo
                                        </span>
                                    </h1>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Vexillologist pitchfork
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Tumeric plaid portland
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Hexagon neutra unicorn
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Vexillologist pitchfork
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-6">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        Mixtape chillwave tumeric
                                    </p>
                                    <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                        Button
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-auto"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p className="text-xs text-gray-500 mt-3">
                                        Literally you probably haven't heard of
                                        them jean shorts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mb-2">
                <div className="container mx-auto">
                    <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                            <img
                                className="focus:outline-none"
                                src="https://cdn.tuk.dev/assets/adidas-dark.png"
                                alt="Adidas"
                                role="img"
                            />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                            <img
                                className="focus:outline-none"
                                src="https://cdn.tuk.dev/assets/channel-dark.png"
                                alt="Chanel"
                                role="img"
                            />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                            <img
                                className="focus:outline-none"
                                src="https://cdn.tuk.dev/assets/nike-dark.png"
                                alt="Nike"
                                role="img"
                            />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                            <img
                                className="focus:outline-none"
                                src="https://cdn.tuk.dev/assets/toyota-dark.png"
                                alt="Toyota"
                                role="img"
                            />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                            <img
                                className="focus:outline-none"
                                src="https://cdn.tuk.dev/assets/gs1-dark.png"
                                alt="GS1"
                                role="img"
                            />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                            <img
                                className="focus:outline-none"
                                src="https://cdn.tuk.dev/assets/berry-dark.png"
                                alt="BlackBerry"
                                role="img"
                            />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                            <img
                                className="focus:outline-none"
                                src="https://cdn.tuk.dev/assets/min-dark.png"
                                alt="Mini"
                                role="img"
                            />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                            <img
                                className="focus:outline-none"
                                src="https://cdn.tuk.dev/assets/honda-dark.png"
                                alt="Honda"
                                role="img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto">
                        <div className="flex flex-col text-center w-full mb-8">
                            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                                Reviews
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                Whatever cardigan tote bag tumblr hexagon
                                brooklyn asymmetrical gentrify, subway tile poke
                                farm-to-table. Franzen you probably haven't
                                heard of them.
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/2">
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img
                                        alt="team"
                                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                        src="https://dummyimage.com/200x200"
                                    />
                                    <div className="flex-grow sm:pl-8">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Holden Caulfield
                                        </h2>
                                        <h3 className="text-gray-500 mb-3">
                                            UI Developer
                                        </h3>
                                        <p className="mb-4">
                                            DIY tote bag drinking vinegar cronut
                                            adaptogen squid fanny pack
                                            vaporware.
                                        </p>
                                        <span className="inline-flex">
                                            <a className="text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/2">
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img
                                        alt="team"
                                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                        src="https://dummyimage.com/200x200"
                                    />
                                    <div className="flex-grow sm:pl-8">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Holden Caulfield
                                        </h2>
                                        <h3 className="text-gray-500 mb-3">
                                            UI Developer
                                        </h3>
                                        <p className="mb-4">
                                            DIY tote bag drinking vinegar cronut
                                            adaptogen squid fanny pack
                                            vaporware.
                                        </p>
                                        <span className="inline-flex">
                                            <a className="text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/2">
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img
                                        alt="team"
                                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                        src="https://dummyimage.com/200x200"
                                    />
                                    <div className="flex-grow sm:pl-8">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Holden Caulfield
                                        </h2>
                                        <h3 className="text-gray-500 mb-3">
                                            UI Developer
                                        </h3>
                                        <p className="mb-4">
                                            DIY tote bag drinking vinegar cronut
                                            adaptogen squid fanny pack
                                            vaporware.
                                        </p>
                                        <span className="inline-flex">
                                            <a className="text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/2">
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img
                                        alt="team"
                                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                        src="https://dummyimage.com/200x200"
                                    />
                                    <div className="flex-grow sm:pl-8">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Holden Caulfield
                                        </h2>
                                        <h3 className="text-gray-500 mb-3">
                                            UI Developer
                                        </h3>
                                        <p className="mb-4">
                                            DIY tote bag drinking vinegar cronut
                                            adaptogen squid fanny pack
                                            vaporware.
                                        </p>
                                        <span className="inline-flex">
                                            <a className="text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Home;
