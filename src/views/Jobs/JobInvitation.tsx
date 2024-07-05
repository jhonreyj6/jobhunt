import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import PostCard from "../../components/PostCard";
import Ads from "../../components/Ads";

const JobInvitation = () => {
  const userStore = useSelector((state: RootState) => state.user);
  const [invitations, setInvitations] = useState([]);

  const getJobInvitation = () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "GET",
      url: `/api/jobs/invitations`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setInvitations(res.data.data);
      })
      .catch((err) => {});
  };

  const csv = (data) => {
    const array = data.split(",");
    return array;
  };

  useEffect(() => {
    getJobInvitation();
  }, []);

  return (
    <>
      <div className="max-w-9xl mx-auto pt-20 px-4">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <PostCard data={invitations} />
          </div>
          <div className="w-96">
            <Ads />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInvitation;
