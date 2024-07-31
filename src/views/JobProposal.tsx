import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Ads from "../components/Ads";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RootState } from "../stores/store";
import { useSelector } from "react-redux";
import PaginateButton from "../components/PaginateButton";

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
      <div className="pt-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-row gap-8">
          <div className="w-full">
            {proposals.map((proposal) => {
              return (
                <div className="border rounded-lg w-full mb-2" key={proposal.id}>
                  <Disclosure>
                    <DisclosureButton className="w-full p-4 text-left text-lg text-indigo-700">
                      <div className="flex flex-row gap-4">
                        <h1 className="w-full">
                          {proposal.post.title}
                          {proposal.seen == 1 && (
                            <span className="ml-2 text-xs text-gray-400" title="seen">
                              <i className="fa-solid fa-eye"></i>
                            </span>
                          )}
                        </h1>
                        <div className="ml-auto">
                          <i className="fa-solid fa-chevron-down"></i>
                        </div>
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="text-gray-500  border-t">
                      <div className="p-4">
                        <p className="mb-2 whitespace-pre-line">{proposal.message}</p>
                        <NavLink to={`/jobs/posts/${proposal.post.slug}`} className="underline text-blue-500">
                          View Post
                        </NavLink>
                      </div>
                      <div className="border-t">
                        <div className="p-4 flex flex-row-reverse gap-2">
                          <button className="inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                            Cancel
                          </button>
                          <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Edit
                          </button>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              );
            })}
            <PaginateButton />
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
