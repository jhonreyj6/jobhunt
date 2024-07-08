import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Ads from "../components/Ads";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RootState } from "../stores/store";
import { useSelector } from "react-redux";

const JobProposal = () => {
  const userStore = useSelector((state: RootState) => state.user);
  const [proposals, setProposals] = useState([]);

  const getProposals = () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "GET",
      url: `/api/jobs/posts/proposals`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setProposals(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getProposals();
  }, []);

  return (
    <>
      <div className="pt-24 max-w-9xl mx-auto px-4">
        <aside className="bg-white w-52 font-[sans-serif] overflow-auto fixed">
          <div>
            <h6 className="text-indigo-600 text-sm font-bold px-4">
              Proposals
            </h6>
            <ul className="mt-2">
              <li>
                <NavLink
                  to="/user/profile/1"
                  className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                >
                  Active
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/portfolio/1"
                  className="text-black hover:text-indigo-600 text-[15px] block hover:bg-indigo-50 rounded px-4 py-2.5 transition-all"
                >
                  Archived
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex flex-row gap-4 ml-64">
          <div className="w-full">
            {proposals.map((proposal) => {
              return (
                <div
                  className="border rounded-lg w-full mb-2"
                  key={proposal.id}
                >
                  <Disclosure>
                    <DisclosureButton className="w-full p-4 text-left text-lg text-indigo-700">
                      <div className="flex flex-row gap-4">
                        <h1 className="w-full">
                          {proposal.post.title}
                          {proposal.seen == 1 && (
                            <span
                              className="ml-2 text-xs text-gray-400"
                              title="seen"
                            >
                              <i className="fa-solid fa-eye"></i>
                            </span>
                          )}
                        </h1>
                        <div className="ml-auto">
                          <i className="fa-solid fa-chevron-down"></i>
                        </div>
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-gray-500 px-4 border-t">
                      <div className="py-4">
                        <p className="mb-2">{proposal.message}</p>
                        <NavLink
                          to={`/jobs/posts/${proposal.post.slug}`}
                          className="underline"
                        >
                          View Post
                        </NavLink>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              );
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

export default JobProposal;
