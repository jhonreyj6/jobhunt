import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import PostCard from "../components/PostCard";
import Ads from "../components/Ads";

const Dashboard = () => {
  const userStore = useSelector((state: RootState) => state.user);

  // State
  const [jobs, setJobs] = useState([]);

  // Refs
  const query = useRef();
  const pagination = useRef({
    state: false,
    page: 1,
  });

  const getJobs = async () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    await axios({
      method: "get",
      url: `/api/jobs/posts`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setJobs(res.data.data);
      })
      .catch((err) => {});
  };

  const searchJobs = (e) => {
    e.preventDefault();
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "GET",
      params: { query: query.current.value },
      url: `/api/jobs/posts/search`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setJobs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const scrollHandler = () => {
    if (
      window.scrollY + 200 > document.documentElement.scrollHeight - document.documentElement.clientHeight &&
      pagination.current.state == false
    ) {
      pagination.current.page = pagination.current.page + 1;
      pagination.current.state = true;

      axios({
        method: "GET",
        params: { page: pagination.current.page },
        url: `/api/jobs/posts`,
      })
        .then((res) => {
          res.data.data.forEach((data) => {
            setJobs((oldArray) => [...oldArray, data]);
          });
          if (res.data.current_page != res.data.last_page) {
            pagination.current.state = false;
          }
        })
        .catch((err) => {});
    }
  };

  useEffect(() => {
    getJobs();

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <div className="pt-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <form onSubmit={searchJobs} className="flex flex-row mb-4">
              <input
                type="text"
                ref={query}
                className="w-full bg-white border border-gray-300 focus:border-indigo-500 outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
              />
              <button
                type="submit"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 text-lg transition-all duration-500"
              >
                Search
              </button>
            </form>
            {jobs.map((job) => {
              return <PostCard data={job} key={job.id} />;
            })}
          </div>

          <div className="w-96">
            <Ads />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
