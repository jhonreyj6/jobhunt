const Profile = () => {
    return (
        <>
            <div className="w-full">
                <div className="border p-8 mb-4 rounded">
                    <div className="flex flex-row gap-4">
                        <div className="mb-2 w-80 h-64">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU"
                                alt=""
                                className="w-full h-full rounded-full"
                            />
                        </div>
                        <div className="w-full mt-8">
                            <div className="flex flex-row justify-between items-center">
                                <h2 className="text-indigo-700 text-3xl">
                                    Jhon Rey Repuela
                                </h2>
                                <div>
                                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        Edit Profile
                                    </button>
                                </div>
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
                            <p className="mb-4">
                                Quis mollit fugiat ex ad est cupidatat est
                                laborum enim. Cupidatat consequat reprehenderit
                                enim ullamco ut cillum in laboris Lorem qui
                                esse. Enim non occaecat velit eiusmod excepteur
                                fugiat mollit exercitation pariatur do cillum
                                consequat. Ad officia culpa sunt sint laboris
                                qui quis aliquip pariatur elit. Cillum proident
                                consectetur amet ex velit dolor excepteur do
                                dolore. Nulla cupidatat commodo deserunt Lorem
                                ipsum eu nisi ullamco ea reprehenderit
                                consectetur in culpa.
                            </p>
                            <div className="flex flex-row justify-between items-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Message
                                </button>
                                <h4 className="text-lg text-indigo-700">
                                    $2425 Total Earnings
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border p-8 mb-4 w-full rounded">
                    <div className="flex flex-row items-center justify-between mb-4 text-indigo-700">
                        <h2 className="text-3xl">About</h2>
                        <div>
                            <a role="button">
                                <i className="fa-regular fa-pen-to-square fa-xl px-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row">
                            <div className="w-64">Birthday</div>
                            <div className="w-full">February 9, 1994</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-64">Age</div>
                            <div className="w-full">30</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-64">Status</div>
                            <div className="w-full">Single</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-64">Place of birth</div>
                            <div className="w-full">
                                Panabo City Philippines
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-64">Address</div>
                            <div className="w-full">
                                Panabo City Philippines
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-64">Member since</div>
                            <div className="w-full">March 2, 2022</div>
                        </div>
                    </div>

                    {/* birthday age status place of birth address */}
                </div>

                <div className="border p-8 mb-4 w-full rounded">
                    <div className="flex flex-row items-center justify-between mb-4">
                        <h2 className="text-3xl text-indigo-700">Experience</h2>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Add experience
                        </button>
                    </div>
                    <div className="border p-6 rounded mb-2">
                        <div className="flex flex-row justify-between items-center text-indigo-700">
                            <h3 className="text-xl">Company name</h3>
                            <a role="button">
                                <i className="fa-regular fa-pen-to-square fa-xl px-2"></i>
                            </a>
                        </div>
                        <div className="mb-2 text-gray-400">
                            Full-stack developer
                        </div>
                        <p className="mb-4">
                            Velit ipsum excepteur duis magna consequat. Officia
                            proident esse eu dolore sit. Eiusmod pariatur
                            officia laborum commodo nisi veniam dolor minim
                            consectetur est. Do do veniam culpa consequat mollit
                            quis. Nulla aliquip dolor minim esse qui
                            exercitation Lorem irure quis ad dolor occaecat
                            dolor. Pariatur consectetur incididunt magna sunt
                            nulla ut non laborum incididunt. Ipsum commodo
                            laboris dolor Lorem enim velit duis elit pariatur
                            qui Lorem excepteur ad. Incididunt reprehenderit
                            veniam nisi eiusmod ad ex. Mollit nostrud magna
                            consectetur quis aliqua est sint ea non adipisicing
                            dolore sunt laborum et. Minim duis ea deserunt
                            dolore minim. Quis voluptate consequat ex magna
                            nulla id consectetur. Cupidatat adipisicing
                            consequat aute cupidatat ad Lorem. Ex laborum
                            commodo enim cillum cupidatat consequat elit anim
                            cillum eu dolor. Veniam aliquip in velit sunt in
                            irure est non occaecat velit. Magna enim et quis ut
                            exercitation.
                        </p>
                        <div className="flex flex-row gap-2">
                            <span>August 9, 1994</span>
                            <span>to</span>
                            <span>March 2, 2004</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
