import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";

const JobDetails = () => {
  const userStore = useSelector((state: RootState) => state.user);

  const [job, setJob] = useState([]);
  const [rate, setRate] = useState();
  const [timeFrame, setTimeFrame] = useState();
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState({
    rate_offer: "",
    time_frame: "",
    message: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  const getJob = async () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    await axios({
      method: "GET",
      url: `/api/jobs/posts/${params.id}`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setJob([res.data]);
      })
      .catch((err) => {});
  };

  const submitProposal = async (e) => {
    e.target.disabled = true;

    const AuthStr = "Bearer ".concat(userStore.access_token);
    await axios({
      method: "POST",
      data: {
        rate_offer: rate,
        time_frame: timeFrame,
        message: message,
        slug: job[0].slug,
      },
      url: `/api/jobs/posts/proposals`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        e.target.disabled = false;
      });
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <>
      <div className="pt-20 max-w-9xl mx-auto px-4">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <PostCard data={job} />

            <div className="border p-4 mb-4 rounded">
              <h1 className="text-xl text-indigo-700 mb-4">
                Your bid in this project
              </h1>

              <div className="flex flex-row gap-4 mb-4">
                <div className="text-indigo-700 w-full">
                  <div className="text-sm">
                    Client Budget Range: ${job.length && job[0].min_rate} - $
                    {job.length && job[0].max_rate} / Hour
                  </div>
                  <input
                    type="number"
                    id="rate"
                    onKeyUp={(e) => {
                      setRate(e.target.value);
                    }}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errorMessage && (
                    <span className="text-red-500">
                      {errorMessage.rate_offer}
                    </span>
                  )}
                </div>

                <div className="text-indigo-700 w-full">
                  <div className="text-sm">
                    Working hours / week: {job.length && job[0].working_hours}
                  </div>
                  <input
                    type="number"
                    id="time_frame"
                    onKeyUp={(e) => {
                      setTimeFrame(e.target.value);
                    }}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errorMessage && (
                    <span className="text-red-500">
                      {errorMessage.time_frame}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative w-full flex flex-col gap-2 mb-5">
                <label
                  htmlFor="proposal"
                  className="leading-7 text-lg font-semi-bold text-indigo-700"
                >
                  Message Proposal:
                </label>
                <textarea
                  id="proposal"
                  cols="30"
                  rows="12"
                  onKeyUp={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="border resize-none rounded focus:outline-indigo-700 px-4 py-2"
                ></textarea>
                {errorMessage && (
                  <span className="text-red-500">{errorMessage.message}</span>
                )}
              </div>

              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="button"
                onClick={(e) => {
                  submitProposal(e);
                }}
              >
                Submit Proposal
              </button>
            </div>
          </div>

          <div className="w-96">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <div className="flex flex-col items-center pb-10 mt-8">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  {job.length && job[0].user.name}
                </h5>
                <span className="text-sm text-gray-500">@plummetworks</span>

                <div className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95 out of 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
