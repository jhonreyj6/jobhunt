import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";
import { Dialog, DialogPanel } from "@headlessui/react";
import Stars from "../../components/Stars";

const JobDetails = () => {
  const userStore = useSelector((state: RootState) => state.user);

  const [job, setJob] = useState([]);
  const [form, setForm] = useState({
    rate: "",
    timeFrame: "",
    message: "",
    image: "",
  });

  const [editForm, setEditForm] = useState({
    working_hours: "",
    rate_offer: "",
    message: "",
  });

  const [pageState, setPageState] = useState(false);

  const [bookmarks, setBookmarks] = useState([]);

  const [errorMessage, setErrorMessage] = useState({
    rate_offer: "",
    time_frame: "",
    message: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const getJob = async () => {
    const AuthStr = "Bearer ".concat(userStore.access_token);
    await axios({
      method: "GET",
      url: `/api/jobs/posts/${params.id}`,
      headers: { Authorization: AuthStr },
    })
      .then((res) => {
        setJob(res.data);
        setPageState(true);
      })
      .catch((err) => {});
  };

  const submitProposal = async (e) => {
    // e.target.disabled = true;
    const formData = new FormData();

    [...form.image].forEach((img) => {
      formData.append("images[]", img);
    });

    formData.append("rate_offer", form.rate);
    formData.append("working_hours", form.timeFrame);
    formData.append("message", form.message);
    formData.append("slug", job.slug);

    await axios({
      method: "POST",
      data: formData,
      url: `/api/jobs/posts/proposals`,
    })
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        e.target.disabled = false;
      });
  };

  const cancelProposal = () => {
    axios({
      method: "DELETE",
      url: `/api/jobs/posts/proposals/${job.id}`,
    })
      .then((res) => {
        setJob((job) => {
          // remove auth_proposal key from object
          const { auth_proposal, ...rest } = job;
          return rest;
        });
        navigate("/dashboard");
      })
      .catch((err) => {});
  };

  const updateProposal = () => {
    axios({
      method: "POST",
      data: {
        working_hours: editForm.working_hours.length ? editForm.working_hours : job.auth_proposal.working_hours,
        rate_offer: editForm.rate_offer.length ? editForm.rate_offer : job.auth_proposal.rate_offer,
        message: editForm.message.length ? editForm.message : job.auth_proposal.message,
      },
      url: `/api/jobs/posts/proposals/${job.auth_proposal.id}`,
    })
      .then((res) => {
        setJob((prevState) => ({
          ...prevState,
          auth_proposal: res.data,
        }));
        setIsOpenEdit(false);
      })
      .catch((err) => {});
  };

  const deleteBookmark = async (job) => {
    let temp = bookmarks.filter((bookmark) => {
      return bookmark.id != job.id;
    });

    setBookmarks(temp);
  };

  const viewImage = (e, file) => {
    // reader.readAsDataURL(file);
    let link = URL.createObjectURL(file);
    window.open(link, "_blank").focus();
  };

  const deleteAttachImage = (e, file, index) => {
    const new_items = [...form.image];
    new_items.splice(index, 1);
    setForm((prevState) => ({
      ...prevState,
      image: new_items,
    }));
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <>
      {pageState && (
        <div className="pt-20 max-w-9xl mx-auto px-4">
          <div className="flex flex-row gap-4">
            <div className="w-full">
              <PostCard data={job} deleteBookmark={deleteBookmark} key={job.id} />

              <div className="border p-4 mb-4 rounded">
                <h1 className="text-xl text-indigo-700 mb-4">Information:</h1>

                {job && job.auth_proposal && (
                  <>
                    <div className="flex flex-row gap-24 mb-1">
                      <div>Your rate: ${job.auth_proposal.rate_offer} / hour</div>
                      <div>Working hours: {job.auth_proposal.working_hours} / week</div>
                    </div>
                    <h2 className="text-xl text-indigo-700">Message:</h2>
                    <p className="mb-8 whitespace-pre-wrap">{job.auth_proposal.message}</p>

                    {job.attachments.map((attachment) => {
                      return (
                        <a href="#!" className="hover:underline block text-blue-500" key={attachment.id}>
                          {attachment.name}
                        </a>
                      );
                    })}

                    <div className="flex flex-row-reverse gap-4 mt-4">
                      <button
                        className="inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                        onClick={() => setIsOpenConfirm(true)}
                      >
                        Cancel
                      </button>
                      <button
                        className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        onClick={() => setIsOpenEdit(true)}
                      >
                        Edit Proposal
                      </button>
                    </div>
                    <Dialog
                      open={isOpenConfirm}
                      onClose={() => setIsOpenConfirm(false)}
                      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-modal"
                    >
                      <div className="fixed pt-32 flex w-screen items-center justify-center p-4">
                        <DialogPanel className="space-y-4 border bg-white p-6 rounded-lg w-[40rem]">
                          <div className="text-center">
                            <h2 className="text-5xl mb-4">
                              <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                            </h2>
                            <p className="text-xl mb-6">Are you sure you want to delete this proposal?</p>
                            <div className="flex gap-4 justify-center">
                              <button
                                className="inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                                onClick={() => cancelProposal()}
                              >
                                Proceed
                              </button>
                              <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                onClick={() => setIsOpenConfirm(false)}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </DialogPanel>
                      </div>
                    </Dialog>

                    <Dialog
                      open={isOpenEdit}
                      onClose={() => setIsOpenEdit(false)}
                      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-modal"
                    >
                      <div className="fixed pt-32 flex w-screen items-center justify-center p-4">
                        <DialogPanel className="space-y-4 border bg-white p-6 rounded-lg w-[50rem]">
                          <div>
                            <div className="flex flex-row gap-4 mb-4">
                              <div className="w-full">
                                <label htmlFor="rate" className="leading-7 text-sm text-gray-600">
                                  Rate:
                                </label>
                                <input
                                  type="number"
                                  id="rate"
                                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                  defaultValue={job.auth_proposal.rate_offer}
                                  onKeyUp={(e) => {
                                    setEditForm((prevState) => ({
                                      ...prevState,
                                      rate_offer: e.target.value,
                                    }));
                                  }}
                                />
                              </div>
                              <div className="w-full">
                                <label htmlFor="working_hours" className="leading-7 text-sm text-gray-600">
                                  Working Hours
                                </label>
                                <input
                                  type="number"
                                  id="working_hours"
                                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                  defaultValue={job.auth_proposal.working_hours}
                                  onKeyUp={(e) => {
                                    setEditForm((prevState) => ({
                                      ...prevState,
                                      working_hours: e.target.value,
                                    }));
                                  }}
                                />
                              </div>
                            </div>

                            <div className="mb-4">
                              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                Your message
                              </label>
                              <textarea
                                id="message"
                                rows="8"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue={job.auth_proposal.message}
                                onKeyUp={(e) => {
                                  setEditForm((prevState) => ({
                                    ...prevState,
                                    message: e.target.value,
                                  }));
                                }}
                              ></textarea>
                            </div>

                            <div className="flex flex-row-reverse gap-2">
                              <button
                                className="inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                                onClick={() => setIsOpenEdit(false)}
                              >
                                Cancel
                              </button>
                              <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                onClick={updateProposal}
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </DialogPanel>
                      </div>
                    </Dialog>
                  </>
                )}

                {job && !job.auth_proposal && (
                  <div>
                    <div className="flex flex-row gap-4 mb-4">
                      <div className="text-indigo-700 w-full">
                        <div className="text-sm">
                          Client Budget Range: ${job.min_rate} - ${job.max_rate} / Hour
                        </div>
                        <input
                          type="number"
                          id="rate"
                          onKeyUp={(e) => {
                            setForm((prevState) => ({
                              ...prevState,
                              rate: e.target.value,
                            }));
                          }}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {errorMessage && <span className="text-red-500">{errorMessage.rate_offer}</span>}
                      </div>
                      <div className="text-indigo-700 w-full">
                        <div className="text-sm">Working hours / week: {job.working_hours}</div>
                        <input
                          type="number"
                          id="time_frame"
                          onKeyUp={(e) => {
                            setForm((prevState) => ({
                              ...prevState,
                              timeFrame: e.target.value,
                            }));
                          }}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {errorMessage && <span className="text-red-500">{errorMessage.time_frame}</span>}
                      </div>
                    </div>
                    <div className="relative w-full flex flex-col gap-2 mb-2">
                      <label htmlFor="proposal" className="leading-7 text-lg font-semi-bold text-indigo-700">
                        Message Proposal:
                      </label>
                      <textarea
                        id="proposal"
                        cols="30"
                        rows="12"
                        onKeyUp={(e) => {
                          setForm((prevState) => ({
                            ...prevState,
                            message: e.target.value,
                          }));
                        }}
                        className="border resize-none rounded focus:outline-indigo-700 px-4 py-2"
                      ></textarea>
                      {errorMessage && <span className="text-red-500">{errorMessage.message}</span>}
                    </div>

                    <div className="flex items-center justify-center w-full mb-4">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG or JPG (MAX. 25mb)</p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          accept="image/png, image/jpg, image/jpeg"
                          multiple
                          onChange={(e) => {
                            setForm((prevState) => ({
                              ...prevState,
                              image: e.target.files,
                            }));
                          }}
                        />
                      </label>
                    </div>

                    {[...form.image].map((img, index) => {
                      return (
                        <div
                          className="mb-2 text-blue-500 border flex flex-row justify-between items-center rounded-lg w-96 px-4"
                          key={index}
                        >
                          <a
                            href="#!"
                            className="hover:underline"
                            onClick={(e) => {
                              viewImage(e, img);
                            }}
                          >
                            {img.name}
                          </a>
                          <a
                            href="#!"
                            className="hover:text-red-500"
                            onClick={(e) => {
                              deleteAttachImage(e, img, index);
                            }}
                          >
                            <i className="fa-solid fa-circle-xmark"></i>
                          </a>
                        </div>
                      );
                    })}

                    <button
                      className="inline-flex mt-4 text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      type="button"
                      onClick={(e) => {
                        submitProposal(e);
                      }}
                    >
                      Submit Proposal
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="w-96">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex flex-col items-center pb-8 mt-8">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie image"
                  />
                  <NavLink
                    to={"/user/profile/" + job.user.slug}
                    className="mb-1 text-xl font-medium text-indigo-700 hover:underline"
                  >
                    {job.user.name}
                  </NavLink>
                  <span className="text-sm text-gray-500 mb-1">@plummetworks</span>

                  <div className="mb-2">
                    <Stars rate={job.clientAverageRating} />
                  </div>
                  <p className="ms-1 text-sm font-medium text-gray-500">{job.clientAverageRating} out of 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;
