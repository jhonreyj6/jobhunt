import { useSelector } from "react-redux";
import Ads from "../../components/Ads";
import { RootState } from "../../stores/store";
import { useEffect, useState } from "react";

const ProfileEdit = () => {
    const userStore = useSelector((state: RootState) => state.user.user);
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [introduction, setIntroduction] = useState();
    const [birthday, setBirthday] = useState();
    const [status, setStatus] = useState();
    const [course, setCourse] = useState();

    const getUser = () => {
        axios({
            method: "GET",
            url: `/api/users/me`,
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {});
    };

    const updateProfile = () => {
        console.log(userStore);

        axios({
            method: "POST",
            data: {
                name: name,
                city: city,
                country: country,
                introduction: introduction,
                birthday: birthday,
                status: status,
            },
            url: `/api/users/${userStore.slug}/update`,
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {});
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <div className="pt-20 max-w-9xl mx-auto px-4">
                <div className="flex flex-row gap-4">
                    <div className="mb-4 w-full">
                        <div className="w-full border rounded-lg mb-4 p-6">
                            <div className="flex flex-row gap-6 items-center mb-6">
                                <div>
                                    <img
                                        src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-1-DMk2FF1-.png"
                                        alt=""
                                        className="h-32 w-32 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <div className="flex flex-row gap-2">
                                        <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4">
                                            Upload Photo
                                        </button>
                                        <button className="inline-flex text-white bg-gray-400 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4">
                                            Reset
                                        </button>
                                    </div>
                                    <p>
                                        Allowed JPG, GIF or PNG. Max size of
                                        800K
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="relative w-full mb-2">
                                    <label
                                        htmlFor="name"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="email"
                                        id="name"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onKeyUp={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className="flex flex-row gap-4 mb-2">
                                    <div className="w-full">
                                        <div className="relative">
                                            <label
                                                htmlFor="birthday"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Birthday
                                            </label>
                                            <input
                                                type="date"
                                                id="birthday"
                                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                onChange={(e) => {
                                                    setBirthday(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="relative w-full">
                                        <label
                                            htmlFor="small"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Civil Status
                                        </label>

                                        <select
                                            id="small"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            onChange={(e) => {
                                                setStatus(e.target.value);
                                            }}
                                        >
                                            <option defaultValue={"single"}>
                                                Single
                                            </option>
                                            <option value={"married"}>
                                                Married
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 mb-2">
                                    <div className="relative w-full">
                                        <label
                                            htmlFor="city"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onKeyUp={(e) => {
                                                setCity(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="relative w-full">
                                        <label
                                            htmlFor="country"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onKeyUp={(e) => {
                                                setCountry(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-row gap-4 mb-2">
                                    <div className="relative w-full">
                                        <label
                                            htmlFor="course"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Course
                                        </label>
                                        <input
                                            type="text"
                                            id="course"
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onKeyUp={(e) => {
                                                setCourse(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="relative w-full">
                                        <label
                                            htmlFor="graduate"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Graduate
                                        </label>

                                        <select
                                            id="graduate"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            onChange={(e) => {}}
                                        >
                                            <option defaultValue={"graduate"}>
                                                Graduate
                                            </option>
                                            <option value={"undergraduate"}>
                                                Undergraduate
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-4 mb-2">
                                    <div className="relative w-full">
                                        <label
                                            htmlFor="start"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Year Start
                                        </label>
                                        <input
                                            type="text"
                                            id="start"
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                    <div className="relative w-full">
                                        <label
                                            htmlFor="finish"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Year End
                                        </label>
                                        <input
                                            type="text"
                                            id="finish"
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="about"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Introduction
                                    </label>
                                    <textarea
                                        id="about"
                                        rows={8}
                                        cols={4}
                                        className="w-full border rounded-lg resize-none p-4 focus:outline-indigo-500 focus:border-indigo-500"
                                        onKeyUp={(e) => {
                                            setIntroduction(e.target.value);
                                        }}
                                    ></textarea>
                                </div>

                                <button
                                    className="inline-flex text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    onClick={updateProfile}
                                >
                                    Update Profile
                                </button>
                            </div>
                        </div>

                        <div className="border p-6 rounded-lg">
                            <h1 className="text-xl font-medium mb-8">
                                Delete Account
                            </h1>
                            <div className="flex items-center mb-4">
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="default-checkbox"
                                    className="ms-2 text-md"
                                >
                                    I confirm my account deactivation.
                                </label>
                            </div>
                            <button className="inline-flex text-white bg-red-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                                Delete Account
                            </button>
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

export default ProfileEdit;
