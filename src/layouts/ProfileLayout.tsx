import { useEffect, useState } from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";

const ProfileLayout = () => {
  const params = useParams();
  const [user, setUser] = useState();

  const getUser = () => {
    // const AuthStr = "Bearer ".concat();
    axios({
      method: "GET",
      url: `/api/users/${params.id}`,
      // headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <div className="max-w-9xl mx-auto px-4 pt-[70px]">
          <div className="flex flex-row gap-4 mt-8 mb-4">
            <aside className="bg-white w-52 font-[sans-serif] overflow-auto">
              <div>
                <h6 className="text-indigo-600 text-sm font-bold px-4">
                  About me
                </h6>
                <ul className="mt-2">
                  <li>
                    <NavLink
                      to={`/user/profile/${user.slug}`}
                      className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/user/portfolio/1"
                      className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                    >
                      Portfolio
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h6 className="text-indigo-600 text-sm font-bold px-4">Job</h6>
                <ul className="mt-2">
                  <li>
                    <NavLink
                      to={`/user/review/1`}
                      className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                    >
                      Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/user/recent/job/1"
                      className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                    >
                      Recent Jobs
                    </NavLink>
                  </li>
                </ul>
              </div>
            </aside>
            <Outlet context={[user]} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileLayout;
