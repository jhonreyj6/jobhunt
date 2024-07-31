import { useEffect, useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";

const JobContract = () => {
  const [jobs, setJobs] = useState([]);
  const userStore = useSelector((state: RootState) => state.user);

  const getJobContracts = () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "GET",
      url: `/api/jobs/contracts`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setJobs(res.data.data);
      })
      .catch((err) => {});
  };

  const searchContract = (e) => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    axios({
      method: "GET",
      params: {
        query: e.target.value.trim(),
      },
      url: `/api/jobs/contracts/search`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setJobs(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getJobContracts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-8xl pt-20 px-4">
        <div className="px-8 py-6 border rounded">
          <div className="flex flex-column sm:flex-row flex-wrap items-center justify-between pb-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                onKeyUp={(e) => {
                  searchContract(e);
                }}
                className="block p-2  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Contracts"
              />
            </div>
          </div>

          <div className="relative overflow-x-auto min-h-96 shadow-md sm:rounded-lg mb-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Date Started
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Date Ended
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Total Earnings
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unpaid Earnings
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => {
                  return (
                    <tr className="bg-white border-b" key={job.id}>
                      <th scope="row" className="px-6 max-w-80 py-4 font-medium text-gray-900">
                        {job.post.title}
                      </th>
                      <td className="px-6 py-4">Active</td>
                      <td className="px-6 py-4">{job.created}</td>
                      <td className="px-6 py-4">{job.ended}</td>
                      <td className="px-6 py-4">${job.paid_earnings}</td>
                      <td className="px-6 py-4">${job.unpaid_earnings}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <Popover className="relative inline-block text-left">
                            <div>
                              <PopoverButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Options
                              </PopoverButton>
                            </div>

                            <PopoverPanel
                              transition
                              className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                              >
                                Account settings
                              </a>
                            </PopoverPanel>
                          </Popover>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobContract;
