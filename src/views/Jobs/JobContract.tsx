import { useEffect, useState } from "react";
import { Popover, PopoverButton, PopoverPanel, Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import Ads from "../../components/Ads";
import { NavLink } from "react-router-dom";
import Stars from "../../components/Stars";
import PaginateButton from "../../components/PaginateButton";

const JobContract = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const userStore = useSelector((state: RootState) => state.user);
  const [isOpenReview, setIsOpenReview] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});
  const [formReview, setFormReview] = useState({
    message: "",
    skills: 0,
    on_time: 0,
    attitude: 0,
  });

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

  const proposeNewContract = (data: Object) => {
    axios({
      method: "POST",
      url: `/api/`,
    })
      .then((res) => {})
      .catch((err) => {});
  };

  const endContract = (data: any) => {
    axios({
      method: "PATCH",
      url: `/api/jobs/contracts/${data.id}`,
    })
      .then((res: any) => {
        setJobs(
          jobs.map((job: any) => {
            return job.id === data.id ? res.data : job;
          })
        );
      })
      .catch((err: any) => {});
  };

  const submitReview = () => {
    axios({
      method: "POST",
      data: {
        message: formReview.message,
        rating: (formReview.skills + formReview.attitude + formReview.on_time) / 3,
        job_contract_id: selectedReview.id,
      },
      url: `/api/users/reviews`,
    })
      .then((res) => {
        setIsOpenReview(false);

        let new_items = [];
        jobs.forEach((job) => {
          if (job == selectedReview) {
            job.my_reviews[0] = res.data;
          }
          new_items.push(job);
        });
        setJobs(new_items);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getJobContracts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-5xl pt-24 px-4">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <div className="border p-4 rounded-lg mb-4">
              <h4 className="pb-2 border-b text-xl text-indigo-700 font-semibold px-4 mb-4 rounded">Contracts</h4>
              <div className="w-full">
                {jobs.map((job) => {
                  return (
                    <div className="border p-4 rounded-lg mb-4 w-full" key={job.id}>
                      <div className="flex flex-row justify-between items-center border-b pb-2 mb-4">
                        <NavLink to={`/jobs/posts/${job.post.slug}`} className="hover:underline">
                          {job.post.title}
                        </NavLink>
                        <Popover className="relative inline-block text-left">
                          <PopoverButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-700 bg-indigo-500 text-white">
                            Action
                          </PopoverButton>
                          <PopoverPanel className="absolute right-0 z-50 mt-2 min-w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            <a
                              role="button"
                              className="block px-4 py-2 text-sm text-gray-700"
                              onClick={() => {
                                proposeNewContract(job);
                              }}
                            >
                              Propose New Contract
                            </a>
                            {job.ends_at == null ? (
                              <a
                                role="button"
                                className="block px-4 py-2 text-sm text-gray-700"
                                onClick={() => {
                                  endContract(job);
                                }}
                              >
                                End Contract
                              </a>
                            ) : (
                              job.my_reviews?.length == 0 && (
                                <a
                                  role="button"
                                  className="block px-4 py-2 text-sm text-gray-700"
                                  onClick={() => {
                                    setIsOpenReview(true);
                                    setSelectedReview(job);
                                  }}
                                >
                                  Create Review
                                </a>
                              )
                            )}
                          </PopoverPanel>
                        </Popover>
                      </div>
                      {/* <p className="mb-2">{job.post.description}</p> */}
                      <div className="w-full">
                        <h2 className="font-semibold text-lg text-indigo-700">Information</h2>
                        <div className="flex flex-row">
                          <h3 className="w-1/2">Paid Earnings</h3>
                          <div>{job.paid_earnings}</div>
                        </div>
                        <div className="flex flex-row">
                          <h3 className="w-1/2">Unpaid Earnings</h3>
                          <div>{job.unpaid_earnings}</div>
                        </div>
                        <div className="flex flex-row">
                          <h3 className="w-1/2">Max Working Hours / week</h3>
                          <div>{job.max_working_hours}</div>
                        </div>
                        <div className="flex flex-row">
                          <h3 className="w-1/2">Total Working Hours</h3>
                          <div>{job.total_working_hours}</div>
                        </div>
                        <div className="flex flex-row">
                          <h3 className="w-1/2">Date Started</h3>
                          <div>{job.created}</div>
                        </div>
                        <div className="flex flex-row">
                          <h3 className="w-1/2">Date Ended</h3>
                          <div>{job.ends_at}</div>
                        </div>
                        {job.my_reviews?.length == 1 && (
                          <div className="flex flex-row mb-2">
                            <h3 className="w-1/2">My Review</h3>
                            <div>
                              <p>{job.my_reviews[0].message ? job.my_reviews[0].message : "No feedback given"}</p>
                              <Stars rate={Math.floor(job.my_reviews[0].rating)} />
                            </div>
                          </div>
                        )}
                        {job.client_reviews?.length == 1 && (
                          <div className="flex flex-row">
                            <h3 className="w-1/2">Client Review</h3>
                            <div>
                              <p>{job.client_reviews[0].message}</p>
                              <Stars rate={Math.floor(job.client_reviews[0].rating)} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <PaginateButton />
          </div>
        </div>
      </div>

      <Dialog
        open={isOpenReview}
        onClose={() => setIsOpenReview(false)}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-modal"
      >
        <div className="fixed pt-32 flex w-screen items-center justify-center p-4">
          <DialogPanel className="border bg-white p-6 rounded-lg w-[50rem]">
            <DialogTitle className="font-semibold pb-2 border-b mb-4">{selectedReview.post?.title}</DialogTitle>

            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none focus:outline-none mb-3"
              placeholder="Write your reviews here..."
              onKeyUp={(e) => {
                setFormReview((prevState) => ({
                  ...prevState,
                  message: e.target.value,
                }));
              }}
            ></textarea>

            <div className="mb-2">
              <h5 className="text-indigo-700">Skills:</h5>
              <div className="flex flex-row gap-1 items-center">
                <a role="button">
                  <i
                    className={(formReview.skills > 0 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        skills: 1,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.skills > 1 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        skills: 2,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.skills > 2 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        skills: 3,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.skills > 3 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        skills: 4,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.skills > 4 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        skills: 5,
                      }))
                    }
                  ></i>
                </a>
              </div>
            </div>

            <div className="mb-2">
              <h5 className="text-indigo-700">Deliver on Time:</h5>
              <div className="flex flex-row gap-1 items-center">
                <a role="button">
                  <i
                    className={(formReview.on_time > 0 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        on_time: 1,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.on_time > 1 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        on_time: 2,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.on_time > 2 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        on_time: 3,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.on_time > 3 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        on_time: 4,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.on_time > 4 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        on_time: 5,
                      }))
                    }
                  ></i>
                </a>
              </div>
            </div>

            <div className="mb-2">
              <h5 className="text-indigo-700">Attitude:</h5>
              <div className="flex flex-row gap-1 items-center">
                <a role="button">
                  <i
                    className={(formReview.attitude > 0 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        attitude: 1,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.attitude > 1 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        attitude: 2,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.attitude > 2 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        attitude: 3,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.attitude > 3 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        attitude: 4,
                      }))
                    }
                  ></i>
                </a>
                <a role="button">
                  <i
                    className={(formReview.attitude > 4 ? "fa-solid" : "fa-regular") + " fa-star text-yellow-500"}
                    onClick={() =>
                      setFormReview((prevState) => ({
                        ...prevState,
                        attitude: 5,
                      }))
                    }
                  ></i>
                </a>
              </div>
            </div>

            <div className="flex flex-row-reverse gap-4">
              <button
                onClick={() => setIsOpenReview(false)}
                className="inline-flex text-white bg-red-500 border-0 py-0.5 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  submitReview();
                }}
                className="inline-flex text-white bg-indigo-500 border-0 py-0.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default JobContract;
