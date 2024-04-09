const Review = () => {
    return (
        <>
            <div className="flex flex-row gap-4 w-full">
                <div className="w-full">
                    <div className="border p-4 rounded mb-2">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt=""
                                className="w-10 h-10 rounded-full"
                            />
                            <h3 className="text-2xl text-indigo-700">
                                Jhon Rey Repuela
                            </h3>
                            <div className="ml-auto text-indigo-700">
                                Total Earnings: $500
                            </div>
                        </div>
                        <p className="mb-2">
                            Ut nulla sunt Lorem id. Incididunt ad excepteur
                            occaecat enim consectetur anim laborum et qui. Non
                            ad elit magna sint sunt dolore. Aute velit est anim
                            ipsum incididunt consectetur reprehenderit dolor
                            non. In exercitation aute excepteur exercitation
                            quis nulla est irure irure. Aliquip in in nisi
                            ullamco consectetur. Adipisicing quis laborum irure
                            id fugiat occaecat. Nulla est consectetur ea
                            excepteur reprehenderit excepteur culpa irure aute
                            occaecat enim fugiat quis quis. Est commodo qui
                            pariatur occaecat cillum sint quis proident et
                            commodo exercitation labore fugiat eu.
                        </p>

                        <div className="text-yellow-300">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <span className="ml-1 text-indigo-700 font-semibold">
                                5
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-96">s</div>
            </div>
        </>
    );
};

export default Review;
