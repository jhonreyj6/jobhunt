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
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { csv, readableDate } from "../../lib/function.js";

const Profile = () => {
  const [user, setUser] = useState();
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [tab, setTab] = useState(1);
  const auth = useSelector((state: RootState) => state.user);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
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

  const addContact = () => {
    axios({
      method: "POST",
      data: { id: user.id },
      url: `/api/users/contacts`,
    })
      .then((res) => {})
      .catch((err) => {});
  };

  useEffect(() => {
    getUser();
    getJobReviews();
  }, []);

  return (
    <>
      {user && (
        <div className="max-w-7xl mx-auto px-4 pt-20">
          <div className="grid lg:grid-cols-4 md:grid-rows-1 gap-4 mb-4">
            <div className="border-indigo-300 lg:col-span-3 mb-4 w-full lg:order-1 order-2 md:col-span-1">
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
                    <div className="border p-6 mb-4 w-full rounded shadow">
                      <h1 className="text-3xl mb-4 text-indigo-700 border-b pb-2">Introduction</h1>
                      <p>{user.introduction ? user.introduction : "No introduction yet"}</p>
                    </div>

                    <div className="border p-6 mb-4 w-full rounded shadow">
                      <h1 className="text-3xl mb-4 text-indigo-700 border-b pb-2">Basic Info</h1>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row">
                          <div className="w-96">Birthday</div>
                          <div className="w-full">{readableDate(user.birthday)}</div>
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
                      <div className="flex flex-row gap-2">
                        {user.skills ? (
                          csv(user.skills).map((skill) => {
                            return (
                              <div key={skill} className="bg-indigo-50 text-indigo-700 px-2 text-center rounded-full">
                                {skill}
                              </div>
                            );
                          })
                        ) : (
                          <h2>No skills added yet</h2>
                        )}
                      </div>
                    </div>

                    <div className="border p-6 rounded shadow mb-4">
                      <h1 className="text-3xl mb-4 text-indigo-700 border-b pb-2">Education</h1>
                      <div className="flex flex-row">
                        {user.educations.length ? (
                          user.educations.map((education) => {
                            return (
                              <div className="w-full mb-2" key={education.id}>
                                <h2 className="text-indigo-700 font-semibold">{education.school_name}</h2>
                                {education.course} {education.graduate == 1 ? "(Graduate) " : "(Undergrad) "}
                                {new Date(education.year_start).getFullYear()}-
                                {new Date(education.year_end).getFullYear()}
                              </div>
                            );
                          })
                        ) : (
                          <h2>No Educations added yet</h2>
                        )}
                      </div>
                    </div>

                    <div className="border p-6 rounded shadow">
                      <h1 className="text-3xl mb-4 text-indigo-700 border-b pb-2">Experience</h1>
                      {user.experiences.length ? (
                        user.experiences.map((exp) => {
                          return (
                            <div className="mb-2" key={exp.id}>
                              <div className="flex flex-row justify-between items-center gap-2">
                                <h2 className="text-lg text-indigo-700 font-semibold">{exp.company_name}</h2>
                                <div>
                                  <span>{new Date(exp.date_start).toLocaleDateString()} - </span>
                                  <span>{exp.date_end ? new Date(exp.date_end).toLocaleDateString() : "Present"}</span>
                                </div>
                              </div>
                              <p className="text-gray-400 mb-2">{exp.position}</p>
                              <p>{exp.description}</p>
                            </div>
                          );
                        })
                      ) : (
                        <h2>No experience yet</h2>
                      )}
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
                          aliquip et sint. Laboris eiusmod culpa et in officia ea dolor incididunt do consectetur mollit
                          proident. Magna eiusmod voluptate incididunt in tempor cillum fugiat fugiat id. Cupidatat ea
                          qui dolor proident. Magna ad mollit ullamco adipisicing duis duis enim do. Irure dolore in eu
                          ipsum qui Lorem cupidatat aliqua. In anim quis commodo veniam adipisicing velit est enim
                          consequat consequat nostrud.
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

            <div className="col-span-1 lg:order-2 md:col-span-1 md:order-1">
              <div className="border p-4 text-center rounded-lg">
                <div className="flex flex-row gap-4 justify-center mb-4">
                  <div className="w-20">
                    <img
                      src="https://randomuser.me/api/portraits/women/21.jpg"
                      alt=""
                      className="w-full h-20 rounded-full"
                    />
                  </div>
                </div>
                <h2 className="text-xl text-indigo-700">{user.name}</h2>
                <p className="text-gray-400">Web Developer</p>
                <div className="flex justify-center mb-4">
                  <Stars rate={5} />
                </div>
                {user.id != auth.user.id && (
                  <div className="flex md:flex-row lg:flex-col justify-center gap-2">
                    <button
                      className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      onClick={() => addContact}
                    >
                      Add Contact
                    </button>
                    <button className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Message
                    </button>
                  </div>
                )}
                {user.id == auth.user.id && (
                  <Link
                    to={`/user/profile/edit`}
                    className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Edit Profile
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
