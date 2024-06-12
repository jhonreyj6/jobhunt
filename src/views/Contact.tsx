const ContactUs = () => {
    return (
        <>
            <div className="pt-32">
                <div className="max-w-6xl mx-auto p-5">
                    <div className="grid grid-cols-1 md:grid-cols-12 border">
                        <div className="bg-indigo-700 md:col-span-4 p-10 text-white">
                            <p className="mt-4 text-sm leading-7 font-regular uppercase">
                                Contact
                            </p>
                            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                                Get In Touch
                            </h3>
                            <p className="mt-4 leading-7 text-gray-200">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                            </p>

                            <div className="flex items-center mt-5">
                                <span className="text-sm">
                                    House #14, Street #12, Darulaman Road,
                                    Kabul, Afghanistan.
                                </span>
                            </div>
                            <div className="flex items-center mt-5">
                                <span className="text-sm">
                                    +93 749 99 65 50
                                </span>
                            </div>
                            <div className="flex items-center mt-5">
                                <span className="text-sm">24/7</span>
                            </div>
                        </div>
                        <form className="md:col-span-8 p-10">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-email"
                                        type="email"
                                        placeholder="********@*****.**"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="topic"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="topic"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        rows="10"
                                        className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    ></textarea>
                                </div>
                                <div className="flex justify-between w-full px-3">
                                    <div className="md:flex md:items-center">
                                        <label className="block text-gray-500 font-bold">
                                            <input
                                                className="mr-2 leading-tight"
                                                type="checkbox"
                                            />
                                            <span className="text-sm">
                                                Send me your newsletter!
                                            </span>
                                        </label>
                                    </div>
                                    <button
                                        className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
