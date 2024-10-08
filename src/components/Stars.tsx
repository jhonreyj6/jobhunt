const Stars = ({ rate }: { rate: number }) => {
  return (
    <>
      <div className="flex flex-row gap-0.5 text-yellow-500 items-center text-sm">
        {Array.from({ length: rate }, (_, index) => index + 1).map((i) => {
          return (
            <div key={i}>
              <i className="fa-solid fa-star"></i>
            </div>
          );
        })}
        {Array.from({ length: 5 - rate }, (_, index) => index + 1).map((i) => {
          return (
            <div key={i}>
              <i className="fa-regular fa-star"></i>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stars;
