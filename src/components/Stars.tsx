const Stars = ({ rate }: { rate: number }) => {
    return (
        <>
            <div className="flex flex-row gap-0.5 text-yellow-500 items-center">
                {Array.from({ length: rate }, (_, index) => index + 1).map(
                    (i) => {
                        return (
                            <div key={i}>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default Stars;
