import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../stores/store";

type PostCardProps = {
  data: Object;
  deleteBookmark?: () => void;
};

const PostCard = ({ data, deleteBookmark }: PostCardProps) => {
  const userStore = useSelector((state: RootState) => state.user);

  const csv = (data) => {
    const array = data.split(",");
    return array;
  };

  const createBookmark = (e, data) => {
    e.preventDefault();
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "POST",
      data: { id: data.id },
      url: `/api/jobs/bookmarks`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        if (res.data.message == "deleted") {
          deleteBookmark(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Link to={`/jobs/posts/${data.slug}`} className="visited:bg-indigo-700">
        <div className="border p-4 rounded mb-2 hover:bg-cyan-50">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-indigo-700 text-xl font-semibold font-sans">{data.title}</h1>
              {data.hasApplied == 1 && <div className="border rounded-lg px-4 bg-indigo-500 text-white">Applied</div>}
            </div>

            <div className="flex flex-row gap-4 items-center text-indigo-700">
              <button
                onClick={(e) => {
                  createBookmark(e, data);
                }}
              >
                <i
                  className={(data.isBookmarked ? "fa-solid" : "fa-regular") + " fa-bookmark"}
                  onClick={(e) => {
                    if (e.target.classList.contains("fa-regular")) {
                      e.target.classList.remove("fa-regular");
                      e.target.classList.add("fa-solid");
                    } else {
                      e.target.classList.remove("fa-solid");
                      e.target.classList.add("fa-regular");
                    }
                  }}
                ></i>
              </button>
              <i className="fa-regular fa-flag"></i>
            </div>
          </div>
          <div className="flex flex-row gap-2 mb-3">
            <div className="text-indigo-500">
              ${data.min_rate} - ${data.max_rate} / hour
            </div>
            <div className="text-gray-400">{data.posted_at}</div>
          </div>
          <p className="mb-2">{data.description}</p>

          <h6 className="mb-1 text-indigo-700">Skill Level: {data.skill_level}</h6>

          <div className="text-indigo-700 font-semibold text-sm mb-4">
            <i className="fa-solid fa-circle-check mr-1"></i>
            <span>Verified Client</span>
            <i className="fa-solid fa-star ml-2"></i>
            <span> 4.7</span>
          </div>

          <div className="flex flex-row gap-2 text-indigo-700">
            {data.skills &&
              csv(data.skills).map((skill) => {
                return (
                  <div key={skill} className="bg-indigo-50 px-2 text-center rounded-full">
                    {skill}
                  </div>
                );
              })}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
