import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../stores/store";
import { capitalizeFirstLetter, csv } from "../lib/function.js";

type PostCardProps = {
  data: Object;
  deleteBookmark?: () => void;
};

const PostCard = ({ data, deleteBookmark }: PostCardProps) => {
  const userStore = useSelector((state: RootState) => state.user);

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

          <p className="text-sm text-gray-500 mb-2">plummetworks</p>

          <div className="flex flex-row gap-2">
            <div className="text-indigo-500">
              {data.min_rate && `$${data.min_rate} - $${data.max_rate} / Hour`}
              {!data.min_rate && `${capitalizeFirstLetter(data.rate_type)}:` + ` $${data.max_rate}`}
            </div>
            <div className="text-gray-400">{data.posted_at}</div>
          </div>
          <p className="mb-2">{data.description}</p>

          <h6 className="text-indigo-700">Skill Level: {data.skill_level}</h6>
          <h6 className="mb-1 text-indigo-700">Number of Freelancers: {data.freelancer}</h6>

          <div className="text-indigo-700 mb-4">
            <i className="fa-solid fa-circle-check mr-1"></i>
            <span>Verified Client</span>
          </div>

          <div className="flex flex-row gap-2 text-indigo-700">
            {data.skills &&
              csv(data.skills).map((skill) => {
                return (
                  <div key={skill} className="bg-indigo-50 px-4 text-center rounded-full">
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
