import { useSelector } from "react-redux";
import Ads from "../../components/Ads";
import { RootState } from "../../stores/store";
import { useEffect, useRef, useState } from "react";

const ProfileEdit = () => {
    const userStore = useSelector((state: RootState) => state.user.user);
    const inputFile = useRef();
    const [user, setUser] = useState({});
    const imgElem = useRef();

    const displayImage = () => {
        if (inputFile.current.files[0]) {
            imgElem.current.src = URL.createObjectURL(
                inputFile.current.files[0]
            );
        }
    };

    const resetImage = () => {};

    const getUser = () => {
        axios({
            method: "GET",
            url: `/api/users/me`,
        })
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {});
    };

    const updateProfile = (e) => {
        e.target.disabled = true;
        axios({
            method: "POST",
            data: {
                image: inputFile.current.files[0],
                name: user.name,
                city: user.city,
                country: user.country,
                introduction: user.introduction,
                birthday: user.birthday,
                status: user.civil_status,
            },
            url: `/api/users/${userStore.slug}/update`,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                e.target.disabled = false;
            })
            .catch((err) => {
                e.target.disabled = false;
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <div className="pt-20 max-w-9xl mx-auto px-4">
                <div className="flex flex-row gap-4">
                    <div className="mb-4 w-full">
                        <div className="flex mb-4 ml-auto">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-auto">
                                Go back
                            </button>
                        </div>

                        <div className="w-full border rounded-lg mb-4 p-6">
                            <div className="flex flex-row gap-6 items-center mb-6">
                                <div>
                                    <img
                                        src={
                                            user.avatar
                                                ? `${
                                                      import.meta.env
                                                          .VITE_APP_URL
                                                  }/storage/users/${
                                                      user.id
                                                  }/images/avatar/${
                                                      user.avatar
                                                  }`
                                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQbiPK7xooNWV90tOdZItEyMB4FXpeml6Sg&s"
                                        }
                                        alt=""
                                        className="h-32 w-32 rounded-lg"
                                        ref={imgElem}
                                    />
                                </div>
                                <div>
                                    <div className="flex flex-row gap-2">
                                        <button
                                            onClick={() => {
                                                inputFile.current?.click();
                                            }}
                                            className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4"
                                        >
                                            Upload Photo
                                        </button>
                                        <button
                                            className="inline-flex text-white bg-gray-400 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4"
                                            onClick={resetImage}
                                        >
                                            Reset
                                        </button>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/png, image/jpeg"
                                            ref={inputFile}
                                            onChange={displayImage}
                                        />
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
                                        defaultValue={user.name}
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        onKeyUp={(e) => {
                                            setUser((prevState) => ({
                                                ...prevState,
                                                name: e.target.value,
                                            }));
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
                                                defaultValue={user.birthday}
                                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                onChange={(e) => {
                                                    setUser((prevState) => ({
                                                        ...prevState,
                                                        birthday:
                                                            e.target.value,
                                                    }));
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
                                                setUser((prevState) => ({
                                                    ...prevState,
                                                    civil_status:
                                                        e.target.value,
                                                }));
                                            }}
                                        >
                                            <option
                                                defaultValue={user.civil_status}
                                            >
                                                {user.civil_status}
                                            </option>
                                            {user.civil_status != "Single" && (
                                                <option value={"Single"}>
                                                    Single
                                                </option>
                                            )}
                                            {user.civil_status != "Married" && (
                                                <option value={"Married"}>
                                                    Married
                                                </option>
                                            )}
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
                                            defaultValue={user.city}
                                            onKeyUp={(e) => {
                                                setUser((prevState) => ({
                                                    ...prevState,
                                                    city: e.target.value,
                                                }));
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
                                            defaultValue={user.country}
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onKeyUp={(e) => {
                                                setUser((prevState) => ({
                                                    ...prevState,
                                                    country: e.target.value,
                                                }));
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
                                            onKeyUp={(e) => {}}
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
                                        defaultValue={user.introduction}
                                        rows={8}
                                        cols={4}
                                        className="w-full border rounded-lg resize-none p-4 focus:outline-indigo-500 focus:border-indigo-500"
                                        onKeyUp={(e) => {
                                            setUser((prevState) => ({
                                                ...prevState,
                                                introduction: e.target.value,
                                            }));
                                        }}
                                    ></textarea>
                                </div>

                                <button
                                    className="inline-flex text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                    onClick={(e) => {
                                        updateProfile(e);
                                    }}
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
