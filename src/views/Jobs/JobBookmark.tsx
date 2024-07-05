import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import Ads from "../../components/Ads";

const JobBookmark = () => {
  const userStore = useSelector((state: RootState) => state.user);
  const [bookmarks, setBookmarks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const router = useNavigate();

  const csv = (data) => {
    const array = data.split(",");
    return array;
  };

  const getJobBookmark = async () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    await axios({
      method: "GET",
      url: `/api/jobs/bookmarks`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setBookmarks(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getJobBookmark();
  }, []);

  return (
    <>
      <div className="max-w-9xl px-4 pt-20 mx-auto">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <PostCard data={bookmarks} />

            {/* {bookmarks.map((bookmark) => {
              return (
                <NavLink
                  to={`/jobs/posts/${bookmark.post.slug}`}
                  key={bookmark.id}
                >
                  <div className="border p-4 rounded mb-2 hover:bg-cyan-50">
                    <div className="flex flex-row items-center justify-between">
                      <h1 className="text-indigo-700 text-xl font-semibold font-sans">
                        {bookmark.post.title}
                      </h1>
                      <div className="flex flex-row gap-4 items-center text-indigo-700">
                        <button>
                          <i
                            className="fa-solid fa-bookmark"
                            onClick={(e) => {
                              e.preventDefault();
                              deleteBookmark(bookmark);
                            }}
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 mb-3">
                      <div className="text-indigo-500">
                        ${bookmark?.post.min_rate} - ${bookmark?.post.max_rate}{" "}
                        / hour
                      </div>
                      <div className="text-gray-400">2 hours ago</div>
                    </div>
                    <p className="mb-4">{bookmark?.post.description}</p>
                    <div className="flex flex-row gap-2 mb-4 text-indigo-700">
                      {csv(bookmark.post.skills).map((skill) => {
                        return (
                          <div
                            key={skill}
                            className="bg-indigo-50 px-2 text-center rounded-full"
                          >
                            {skill}
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-indigo-700 font-semibold text-sm">
                      <i className="fa-solid fa-circle-check mr-1"></i>
                      <span>Verified Client</span>
                      <i className="fa-solid fa-star ml-2"></i>
                      <span> 4.7</span>
                    </div>
                  </div>
                </NavLink>
              );
            })} */}
            {/* {
                            bookmarks.length == 0 &&
                            <div className="flex items-center h-screen  mt-[-80px] w-full">
                                <div className="flex flex-col items-center w-full">
                                    <h3 className="text-2xl mb-4">You don't have bookmark any job yet.</h3>
                                    
                                        <button onClick={() => {
                                            router('/dashboard')
                                        }} className="text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">
                                            Go Back
                                        </button>
                                    
                                </div>
                            </div>
                        } */}
          </div>

          <div className="w-96">
            <Ads />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobBookmark;
