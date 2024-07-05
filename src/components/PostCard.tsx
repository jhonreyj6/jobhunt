import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../stores/store";

const PostCard = (props) => {
  const userStore = useSelector((state: RootState) => state.user);
  const jobs = props.data;

  const csv = (data) => {
    const array = data.split(",");
    return array;
  };

  const createBookmark = (e, job) => {
    e.preventDefault();
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "POST",
      data: { id: job.id },
      url: `/api/jobs/bookmarks`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {jobs.map((job) => {
        return (
          <NavLink to={`/jobs/posts/${job.slug}`} key={job.id}>
            <div className="border p-4 rounded mb-2 hover:bg-cyan-50">
              <div className="flex flex-row items-center justify-between">
                <h1 className="text-indigo-700 text-xl font-semibold font-sans">
                  {job.title}
                </h1>
                <div className="flex flex-row gap-4 items-center text-indigo-700">
                  <button
                    onClick={(e) => {
                      createBookmark(e, job);
                    }}
                  >
                    <i
                      className={
                        (job.isBookmarked ? "fa-solid" : "fa-regular") +
                        " fa-bookmark"
                      }
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
                  ${job.min_rate} - ${job.max_rate} / hour
                </div>
                <div className="text-gray-400">{job.posted_at}</div>
              </div>
              <p className="mb-2">{job.description}</p>

              <h6 className="mb-1 text-indigo-700">
                Skill Level: {job.skill_level}
              </h6>

              <div className="text-indigo-700 font-semibold text-sm mb-4">
                <i className="fa-solid fa-circle-check mr-1"></i>
                <span>Verified Client</span>
                <i className="fa-solid fa-star ml-2"></i>
                <span> 4.7</span>
              </div>

              <div className="flex flex-row gap-2 text-indigo-700">
                {csv(job.skills).map((skill) => {
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
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

export default PostCard;
