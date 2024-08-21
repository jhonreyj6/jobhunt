import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Ads from "../components/Ads";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RootState } from "../stores/store";
import { useSelector } from "react-redux";
import PaginateButton from "../components/PaginateButton";

const JobProposal = () => {
  const userStore = useSelector((state: RootState) => state.user);
  const [activeProposals, setActiveProposals] = useState([]);
  const [inActiveProposals, setInActiveProposals] = useState([]);
  const [pageState, setPageState] = useState(false);

  const getActiveProposals = () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "GET",
      url: `/api/jobs/posts/proposals/active`,
      headers: { Authorization: AuthStr },
    })
      .then((res: any) => {
        setActiveProposals(res.data.data);
      })
      .catch((err: any) => {});
  };

  const getInActiveProposals = () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "GET",
      url: `/api/jobs/posts/proposals/inactive`,
      headers: { Authorization: AuthStr },
    })
      .then((res: any) => {
        setInActiveProposals(res.data.data);
      })
      .catch((err: any) => {});
  };

  useEffect(() => {
    getActiveProposals();
    getInActiveProposals();
    setPageState(true);
  }, []);

  return (
    <>
      {pageState == true && (
        <div className="pt-24 max-w-5xl mx-auto px-4">
          <div className="flex flex-row gap-8">
            <div className="w-full">
              <div className="border rounded-lg p-4 mb-4">
                <div className="flex flex-row justify-between border-b pb-2 mb-4">
                  <h1 className="text-xl text-indigo-700 font-semibold">Active Proposal</h1>
                </div>

                {activeProposals.map((proposal: any) => {
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
                          </div>
                          <div className="border-t">
                            <div className="p-4 flex flex-row-reverse gap-2">
                              <button className="inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                                Cancel
                              </button>
                              <NavLink
                                to={`/jobs/posts/${proposal?.post.slug}`}
                                className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                              >
                                View Proposal
                              </NavLink>
                            </div>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    </div>
                  );
                })}
                {activeProposals.length > 4 && <PaginateButton />}
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex flex-row justify-between border-b pb-2 mb-4">
                  <h1 className="text-xl text-indigo-700 font-semibold">History Proposal</h1>
                </div>
                {inActiveProposals.map((proposal: any) => {
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
                          </div>
                          <div className="border-t">
                            <div className="p-4 flex flex-row-reverse gap-2">
                              <button className="inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                                Cancel
                              </button>
                              <NavLink
                                to={`/jobs/posts/${proposal.post.slug}`}
                                className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                              >
                                View Proposal
                              </NavLink>
                            </div>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    </div>
                  );
                })}
                {inActiveProposals.length > 4 && <PaginateButton />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobProposal;
