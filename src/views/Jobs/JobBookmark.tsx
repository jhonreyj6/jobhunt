import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import Ads from "../../components/Ads";
import { RootState } from "../../stores/store";

const JobBookmark = () => {
  const userStore = useSelector((state: RootState) => state.user);
  const [bookmarks, setBookmarks] = useState([]);
  const [pageState, setPageState] = useState(false);
  const router = useNavigate();

  const getJobBookmark = async () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    await axios({
      method: "GET",
      url: `/api/jobs/bookmarks`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setBookmarks(res.data.data);
        setPageState(true);
      })
      .catch((err) => {});
  };

  const deleteBookmark = async (job) => {
    let temp = bookmarks.filter((bookmark) => {
      return bookmark.id != job.id;
    });

    setBookmarks(temp);
  };

  useEffect(() => {
    getJobBookmark();
  }, []);

  return (
    <>
      {pageState && (
        <div className="max-w-5xl px-4 pt-20 mx-auto">
          <div className="flex flex-row gap-4">
            <div className="w-full">
              {bookmarks.map((bookmark) => {
                return <PostCard data={bookmark} deleteBookmark={deleteBookmark} filter={true} key={bookmark.id} />;
              })}

              {bookmarks.length == 0 && (
                <div className="flex items-center h-screen  mt-[-80px] w-full">
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-2xl mb-4">You don't have bookmark any job yet.</h3>

                    <button
                      onClick={() => {
                        router("/dashboard");
                      }}
                      className="text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg"
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobBookmark;
