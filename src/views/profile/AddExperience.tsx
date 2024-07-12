import { useSelector } from "react-redux";
import Ads from "../../components/Ads";
import { RootState } from "../../stores/store";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const AddExperience = () => {
    const userStore = useSelector((state: RootState) => state.user.user);
    const [company, setCompany] = useState();
    const [position, setPosition] = useState();
    const [message, setMessage] = useState();
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();
    const navigate = useNavigate();

    const addExperience = (e) => {
        e.target.disabled = true;
        axios({
            method: "POST",
            data: {
                company_name: company,
                position: position,
                description: message,
                date_start: dateStart,
                date_end: dateEnd,
            },
            url: `/api/users/add/experience`,
        })
            .then((res) => {
                navigate(`/user/profile/${userStore.slug}`);
            })
            .catch((err) => {
                e.target.disabled = false;
            });
    };

    return (
        <>
            <div className="mx-auto px-4 max-w-9xl pt-20">
                <div className="flex flex-row gap-4">
                    <div className="w-full">
                        <div className="border p-4 mb-2 rounded-lg">
                            <div className="border-b pb-4 border-indigo-500 mb-4 flex flex-row justify-between items-center">
                                <h1 className="text-2xl text-indigo-700">
                                    Add Experience
                                </h1>
                                <Link
                                    to={`/user/profile/${userStore.slug}`}
                                    className="text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                >
                                    Go back
                                </Link>
                            </div>

                            <div className="flex flex-row gap-4 mb-2">
                                <div className="w-full">
                                    <label
                                        htmlFor="company"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Company name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="email"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onKeyUp={(e) => {
                                            setCompany(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="position"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        id="position"
                                        name="text"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onKeyUp={(e) => {
                                            setPosition(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-4 mb-2">
                                <div className="w-full">
                                    <label
                                        htmlFor="start"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Date Start
                                    </label>
                                    <input
                                        type="date"
                                        id="start"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onChange={(e) => {
                                            setDateStart(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="end"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Date End
                                    </label>
                                    <input
                                        type="date"
                                        id="end"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onChange={(e) => {
                                            setDateEnd(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows={8}
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none focus:outline-indigo-500 p-4"
                                    placeholder="Write your experience..."
                                    onKeyUp={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                ></textarea>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    className=" text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    onClick={(e) => {
                                        addExperience(e);
                                    }}
                                >
                                    Add Experience
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

export default AddExperience;
