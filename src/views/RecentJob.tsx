const RecentJob = () => {
    return (
        <>
            <div className="border p-4 rounded mb-2 w-full">
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <h3 className="text-indigo-700 text-xl font-semibold font-sans">
                            Title
                        </h3>
                    </div>

                    <div className="text-indigo-700">
                        <div className="text-lg">Total Earnings: $678</div>
                    </div>
                </div>

                <div className="flex flex-row gap-2 mb-3">
                    <div className="text-indigo-500">$3/hour</div>
                </div>

                <div className="mb-4">
                    Cillum reprehenderit mollit proident aute velit do. Lorem ex
                    quis dolore veniam cupidatat eiusmod amet. Laboris aliqua
                    reprehenderit magna laborum amet eiusmod est minim officia
                    enim id ullamco incididunt. Tempor adipisicing dolore duis
                    Lorem mollit velit ad excepteur eiusmod pariatur do.
                    Excepteur exercitation ad esse do in velit occaecat elit
                    laborum. Occaecat tempor quis est occaecat dolor nostrud et
                    in sit officia culpa. Adipisicing voluptate nisi dolore
                    dolor cupidatat aute officia reprehenderit est duis minim
                    consectetur sint.
                </div>

                <div className="flex flex-row gap-2 mb-2 text-indigo-700">
                    <div>Status: Active</div>
                </div>

                <div className="text-indigo-700 font-semibold font-lg">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span> 5</span>
                </div>
            </div>
        </>
    );
};

export default RecentJob;
