import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import Stars from "../../components/Stars";
import PaginateButton from "../../components/PaginateButton";

const Profile = () => {
  const [user, setUser] = useState();
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [tab, setTab] = useState(1);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const csv = (data) => {
    const array = data.split(",");
    return array;
  };

  const getJobReviews = (rating) => {
    axios({
      method: "GET",
      params: {
        rating: rating,
      },
      url: `/api/users/${params.id}/reviews`,
    })
      .then((res) => {
        setReviews(res.data.data);
      })
      .catch((err) => {});
  };

  const getUser = () => {
    axios({
      method: "GET",
      url: `/api/users/${params.id}`,
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {});
  };

  // const forLoop = (data) => {
  //     for (let i = 0; i < data.length; i++) {
  //         console.log("yes");

  //         return true;
  //     }
  // };

  useEffect(() => {
    getUser();
    getJobReviews();
  }, []);

  return (
    <>
      {user && (
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="flex flex-row gap-4">
            <div className="w-full">
              <div className="border px-6 py-4 mb-4 rounded shadow">
                <div className="flex flex-row gap-8 items-center">
                  <div className="w-80 text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYiPD-rqkRDL_e5r9PDjvBNnXJs0WMNW-yMJGf1Ooww&s"
                      alt=""
                      className="w-full h-56 rounded-full mb-3"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-row justify-between items-center">
                      <h2 className="text-indigo-700 text-3xl">{user.name}</h2>
                    </div>
                    <div className="text-yellow-300 mb-2">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <span className="text-indigo-700 mx-2">4.3</span>
                      <span className="text-indigo-700">(6 reviews)</span>
                    </div>
                    <p className="mb-4 min-h-16 max-h-36 overflow-y-auto">{user.introduction}</p>
                    <div className="flex flex-row gap-4 items-center">
                      <Link
                        to={`/user/profile/edit`}
                        className="text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        <i className="fa-solid fa-square-pen"></i>
                        <span className="ml-2">Edit Profile</span>
                      </Link>
                      <button className="text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        <i className="fa-solid fa-message"></i>
                        <span className="ml-2">Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                  <div className="flex flex-row gap-4 mb-2 border p-6 rounded">
                    <div className=" w-1/2">
                      <svg className="w-full h-32" viewBox="0 0 100 100">
                        <circle
                          className="text-gray-200 stroke-current"
                          strokeWidth="10"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        <circle
                          className="text-indigo-500  progress-ring__circle stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          strokeDasharray="251.2"
                          strokeDashoffset="calc(251.2px - (251.2px * 70) / 100)"
                        ></circle>

                        <text
                          x="50"
                          y="50"
                          fontFamily="Verdana"
                          fontSize="12"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                        >
                          70%
                        </text>
                      </svg>
                      <div className="text-center">
                        <h1 className="text-indigo-700 text-xl font-semibold">Rating</h1>
                        <h3>(6 reviews)</h3>
                      </div>
                    </div>

                    <div className=" w-1/2">
                      <svg className="w-full h-32" viewBox="0 0 100 100">
                        <circle
                          className="text-gray-200 stroke-current"
                          strokeWidth="10"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        <circle
                          className="text-indigo-500  progress-ring__circle stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          strokeDasharray="251.2"
                          strokeDashoffset="calc(251.2px - (251.2px * 70) / 100)"
                        ></circle>

                        <text
                          x="50"
                          y="50"
                          fontFamily="Verdana"
                          fontSize="12"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                        >
                          97%
                        </text>
                      </svg>
                      <div className="text-center">
                        <h1 className="text-indigo-700 text-xl font-semibold">Completion</h1>
                        <h3>(6 reviews)</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border shadow rounded">
                    <div className="flex flex-col gap-2">
                      <button className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Github
                      </button>
                      <button className="w-full bg-red-600 border border-red-400 text-white py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
                        Youtube
                      </button>
                      <button className="w-full bg-white border border-slate-400 text-gray-700 py-2 px-6 focus:outline-none hover:border-slate-600 hover:text-gray-950 rounded text-lg">
                        Stackoverflow
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="border-indigo-300 mb-4">
                    <TabGroup>
                      <TabList className="flex flex-row text-sm font-medium text-center text-gray-700 mb-4 border border-indigo-200 rounded">
                        <Tab className="w-full outline-none">
                          <a
                            role="button"
                            className={
                              (tab == 1 ? "border-b-4 bg-indigo-50 " : "") +
                              "flex items-center justify-center p-4 text-indigo-700 border-b-indigo-700 hover:text-indigo-700 hover:border-indigo-700 group"
                            }
                            onClick={() => {
                              setTab(1);
                            }}
                          >
                            About Me
                          </a>
                        </Tab>
                        <Tab className="w-full outline-none">
                          <a
                            role="button"
                            className={
                              (tab == 2 ? "border-b-4 bg-indigo-50 " : "") +
                              "flex items-center justify-center p-4 text-indigo-700 border-b-indigo-700 hover:text-indigo-700 hover:border-indigo-700 group"
                            }
                            onClick={() => {
                              setTab(2);
                            }}
                          >
                            Portfolio
                          </a>
                        </Tab>
                        <Tab className="w-full outline-none">
                          <a
                            role="button"
                            className={
                              (tab == 3 ? "border-b-4 bg-indigo-50 " : "") +
                              "flex items-center justify-center p-4 text-indigo-700 border-b-indigo-700 hover:text-indigo-700 hover:border-indigo-700 group"
                            }
                            onClick={() => {
                              setTab(3);
                            }}
                          >
                            Work History
                          </a>
                        </Tab>
                      </TabList>
                      <TabPanels className="mt-4">
                        <TabPanel>
                          <div className="col-span-1">
                            <div className="border p-6 mb-4 w-full rounded shadow">
                              <h1 className="text-3xl mb-4 text-indigo-700 border-b pb-2">About</h1>

                              <div className="flex flex-col gap-2">
                                <div className="flex flex-row">
                                  <div className="w-96">Birthday</div>
                                  <div className="w-full">{user.birthday}</div>
                                </div>
                                <div className="flex flex-row">
                                  <div className="w-96">Status</div>
                                  <div className="w-full">{user.civil_status}</div>
                                </div>
                                <div className="flex flex-row">
                                  <div className="w-96">Address</div>
                                  <div className="w-full">
                                    {user.city ? user.city : ""} {user.country ? ", " + user.country : ""}
                                    {/* {user.city} City, {user.country} */}
                                  </div>
                                </div>
                                <div className="flex flex-row">
                                  <div className="w-96">Member since</div>
                                  <div className="w-full">{new Date(user.created_at).toLocaleDateString()}</div>
                                </div>
                              </div>
                            </div>

                            <div className="border p-6 mb-4 w-full rounded shadow">
                              <h2 className="text-3xl mb-4 text-indigo-700 border-b pb-2">Skills</h2>
                              <div className="flex flex-row gap-2 text-indigo-700">
                                {user.skills &&
                                  csv(user.skills).map((skill) => {
                                    return (
                                      <div key={skill} className="bg-indigo-50 px-2 text-center rounded-full">
                                        {skill}
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>

                            <div className="border p-6 rounded shadow mb-4">
                              <h1 className="text-3xl mb-4 text-indigo-700 border-b pb-2">Education</h1>
                              <div className="flex flex-row">
                                <div>
                                  {user.educations.map((education) => {
                                    return (
                                      <div className="w-full mb-2" key={education.id}>
                                        <h2 className="text-indigo-700 font-semibold">{education.school_name}</h2>
                                        {education.course} {education.graduate == 1 ? "(Graduate) " : "(Undergrad) "}
                                        {new Date(education.year_start).getFullYear()}-
                                        {new Date(education.year_end).getFullYear()}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            <div className="border p-6 rounded shadow">
                              <h1 className="text-3xl mb-4 text-indigo-700 border-b pb-2">Experience</h1>
                              {user.experiences.map((exp) => {
                                return (
                                  <div className="mb-2" key={exp.id}>
                                    <div className="flex flex-row justify-between items-center gap-2">
                                      <h2 className="text-lg text-indigo-700 font-semibold">{exp.company_name}</h2>
                                      <div>
                                        <span>{new Date(exp.date_start).toLocaleDateString()} - </span>
                                        <span>
                                          {exp.date_end ? new Date(exp.date_end).toLocaleDateString() : "Present"}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="text-gray-400 mb-2">{exp.position}</p>
                                    <p>{exp.description}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="border mb-4 rounded shadow">
                            <div className="w-full">
                              <Swiper
                                className="mySwiper swiper-h"
                                modules={[Pagination]}
                                pagination={pagination}
                                navigation={true}
                              >
                                <SwiperSlide>
                                  <img
                                    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg"
                                    alt=""
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg"
                                    alt=""
                                  />
                                </SwiperSlide>
                              </Swiper>
                            </div>
                            <div className="p-4">
                              <h1 className="text-lg text-indigo-700 font-semibold">Title</h1>
                              <p className="mb-4">
                                Quis culpa duis nostrud ad in Lorem quis ea magna magna consectetur. Laborum aliqua sit
                                aliquip et sint. Laboris eiusmod culpa et in officia ea dolor incididunt do consectetur
                                mollit proident. Magna eiusmod voluptate incididunt in tempor cillum fugiat fugiat id.
                                Cupidatat ea qui dolor proident. Magna ad mollit ullamco adipisicing duis duis enim do.
                                Irure dolore in eu ipsum qui Lorem cupidatat aliqua. In anim quis commodo veniam
                                adipisicing velit est enim consequat consequat nostrud.
                              </p>
                              <div>
                                <div>
                                  <div>
                                    <a href="#!" className="text-blue-500 hover:underline">
                                      https://j6cafe.com/
                                    </a>
                                  </div>
                                  <div>
                                    <a href="#!" className="text-blue-500 hover:underline">
                                      https://j6cafe.com/
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <PaginateButton />
                        </TabPanel>
                        <TabPanel>
                          <div className="border shadow">
                            <div className="flex flex-row">
                              <button
                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                onClick={() => {
                                  getJobReviews();
                                }}
                              >
                                All
                              </button>
                              <button
                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                onClick={() => {
                                  getJobReviews(5);
                                }}
                              >
                                5 Star
                              </button>
                              <button
                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                onClick={() => {
                                  getJobReviews(4);
                                }}
                              >
                                4 Star
                              </button>
                              <button
                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                onClick={() => {
                                  getJobReviews(3);
                                }}
                              >
                                3 Star
                              </button>
                              <button
                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                onClick={() => {
                                  getJobReviews(2);
                                }}
                              >
                                2 Star
                              </button>
                              <button
                                className="w-full text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
                                onClick={() => {
                                  getJobReviews(1);
                                }}
                              >
                                1 Star
                              </button>
                            </div>
                          </div>

                          {reviews.map((review) => {
                            return (
                              <div className="border p-4 border-indigo-700 rounded mt-4" key={review.id}>
                                <div className="flex flex-row mb-2">
                                  <div className="w-12">
                                    <img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYiPD-rqkRDL_e5r9PDjvBNnXJs0WMNW-yMJGf1Ooww&s"
                                      alt=""
                                      className="w-full h-12"
                                    />
                                  </div>

                                  <div className="ml-6">
                                    <h1 className="font-semibold text-lg text-indigo-700">{review.user.name}</h1>
                                    <p className="mb-1">{review.message}</p>
                                    <Stars rate={review.rating} />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Profile;
