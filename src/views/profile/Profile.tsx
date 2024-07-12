import { Link, useOutletContext } from "react-router-dom";
const Profile = () => {
    const [user] = useOutletContext();

    return (
        <>
            {user && (
                <div className="w-full">
                    <div className="border p-8 mb-4 rounded">
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
                                        <span className="ml-2">Message</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border p-8 mb-4 w-full rounded">
                        <div className="flex flex-row items-center justify-between mb-4 text-indigo-700">
                            <h2 className="text-3xl">About</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row">
                                <div className="w-96">Birthday</div>
                                <div className="w-full">{user.birthday}</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-96">Status</div>
                                <div className="w-full">
                                    {user.civil_status}
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-96">Address</div>
                                <div className="w-full">
                                    {user.city} City, {user.country}
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-96">Member since</div>
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
                                {user.educations.map((education) => {
                                    return (
                                        <div
                                            className="w-full"
                                            key={education.id}
                                        >
                                            {education.course}{" "}
                                            {education.graduate == 1
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
                                })}
                            </div>
                        </div>

                        {/* birthday age status place of birth address */}
                    </div>

                    <div className="border p-8 mb-4 w-full rounded">
                        <div className="flex flex-row items-center justify-between mb-4">
                            <h2 className="text-3xl text-indigo-700">
                                Experience
                            </h2>
                            <Link
                                to="/user/profile/add/experience"
                                className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                Add Experience
                            </Link>
                        </div>
                        {user.experiences.map((experience) => {
                            return (
                                <div
                                    className="border p-6 rounded mb-2"
                                    key={experience.id}
                                >
                                    <div className="flex flex-row justify-between items-center text-indigo-700">
                                        <h3 className="text-xl font-semibold">
                                            {experience.company_name}
                                        </h3>
                                        <a role="button">
                                            <i className="fa-regular fa-pen-to-square fa-lg px-2"></i>
                                        </a>
                                    </div>
                                    <div className="mb-2 text-gray-400">
                                        {experience.role}
                                    </div>
                                    <p className="mb-4">
                                        {experience.description}
                                    </p>
                                    <div className="flex flex-row gap-2">
                                        <span>
                                            {new Date(
                                                experience.date_start
                                            ).toLocaleDateString()}
                                        </span>
                                        {experience.date_end && <span>to</span>}

                                        {experience.date_end && (
                                            <span>
                                                {new Date(
                                                    experience.date_end
                                                ).toLocaleDateString()}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
