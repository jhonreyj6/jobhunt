import { useSelector } from "react-redux";
import Ads from "../../components/Ads";
import { RootState } from "../../stores/store";
import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import skills from "../../lib/skills.js";
import { capitalizeFirstLetter } from "../../lib/function.js";

const ProfileEdit = () => {
  const userStore = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  const inputFile = useRef();
  const [user, setUser] = useState({});
  const imgElem = useRef();
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [suggestSkill, setSuggestSkill] = useState([]);
  const [isSuggestSkillOpen, setIsSuggestSkillOpen] = useState(false);
  const [educationCount, setEducationCount] = useState(1);
  const [experienceCount, setExperienceCount] = useState(1);
  // educations
  const [courses, setCourses] = useState([]);
  const [graduate, setGraduate] = useState(["graduate"]);
  const [schoolYearStart, setSchoolYearStart] = useState([]);
  const [schoolYearEnd, setSchoolYearEnd] = useState([]);

  const [companies, setCompanies] = useState([]);
  const [positions, setPositions] = useState([]);
  const [expStart, setExpStart] = useState([]);
  const [expEnd, setExpEnd] = useState([]);

  const displayImage = () => {
    if (inputFile.current.files[0]) {
      imgElem.current.src = URL.createObjectURL(inputFile.current.files[0]);
    }
  };

  const resetImage = () => {};

  const searchSkill = (query) => {
    if (query.length >= 3) {
      setSuggestSkill([]);
      setIsSuggestSkillOpen(true);
      skills.forEach((skill) => {
        if (skill.match(query) && !selectedSkill.includes(skill)) {
          setSuggestSkill((prevState) => [skill, ...prevState]);
        }
      });
    }
  };

  const removeSelectedSkill = (skill) => {
    const new_skill = selectedSkill.filter((data) => {
      return data != skill;
    });
    setSelectedSkill(new_skill);
  };

  const getUser = () => {
    axios({
      method: "GET",
      url: `/api/auth/me`,
    })
      .then((res) => {
        setUser(res.data);
        setSelectedSkill(res.data.skills.split(","));
      })
      .catch((err) => {});
  };

  const updateProfile = (e) => {
    e.target.disabled = true;
    axios({
      method: "POST",
      data: {
        image: inputFile.current.files[0],
        name: user.name,
        city: user.city,
        country: user.country,
        introduction: user.introduction,
        birthday: user.birthday,
        status: user.civil_status,
        skills: selectedSkill,
        course: courses,
        graduate: graduate,
        school_start: schoolYearStart,
        school_end: schoolYearEnd,
        company: companies,
        position: positions,
        exp_start: expStart,
        exp_end: expEnd,
      },
      url: `/api/users/${userStore.slug}/update`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        e.target.disabled = false;
      })
      .catch((err) => {
        console.log(err);
        e.target.disabled = false;
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="pt-24 max-w-9xl mx-auto px-4">
        <div className="flex flex-row gap-4">
          <div className="mb-4 w-full">
            <div className="flex mb-4">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Go back
              </button>
            </div>

            <div className="w-full border rounded-lg mb-4 p-6">
              <div className="flex flex-row gap-6 items-center mb-6">
                <div>
                  <img
                    src={
                      user.avatar
                        ? `${import.meta.env.VITE_APP_URL}/storage/users/${user.id}/images/avatar/${user.avatar}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQbiPK7xooNWV90tOdZItEyMB4FXpeml6Sg&s"
                    }
                    alt=""
                    className="h-32 w-32 rounded-lg"
                    ref={imgElem}
                  />
                </div>
                <div>
                  <div className="flex flex-row gap-2">
                    <button
                      onClick={() => {
                        inputFile.current?.click();
                      }}
                      className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4"
                    >
                      Upload Photo
                    </button>
                    <button
                      className="inline-flex text-white bg-gray-400 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4"
                      onClick={resetImage}
                    >
                      Reset
                    </button>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/png, image/jpeg"
                      ref={inputFile}
                      onChange={displayImage}
                    />
                  </div>
                  <p>Allowed JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-4">
                  <div className="relative w-full mb-2">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      defaultValue={user.name}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onKeyUp={(e) => {
                        setUser((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="relative w-full mb-2">
                    <label htmlFor="username" className="leading-7 text-sm text-gray-600">
                      Username
                    </label>
                    <input
                      type="email"
                      id="username"
                      defaultValue={user.slug}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onKeyUp={(e) => {
                        setUser((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-4 mb-2">
                  <div className="w-full">
                    <div className="relative">
                      <label htmlFor="birthday" className="leading-7 text-sm text-gray-600">
                        Birthday
                      </label>
                      <input
                        type="date"
                        id="birthday"
                        defaultValue={user.birthday}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => {
                          setUser((prevState) => ({
                            ...prevState,
                            birthday: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <label htmlFor="small" className="leading-7 text-sm text-gray-600">
                      Civil Status
                    </label>
                    <select
                      id="small"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) => {
                        setUser((prevState) => ({
                          ...prevState,
                          civil_status: e.target.value,
                        }));
                      }}
                    >
                      {!user.civil_status && (
                        <>
                          <option>Single</option>
                          <option>Married</option>
                        </>
                      )}
                      {user.civil_status == "Single" && (
                        <>
                          <option defaultValue={user.civil_status}>Single</option>
                          <option>Married</option>
                        </>
                      )}
                      {user.civil_status == "Married" && (
                        <>
                          <option>Married</option>
                          <option>Single</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mb-2">
                  <div className="relative w-full">
                    <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      defaultValue={user.city}
                      onKeyUp={(e) => {
                        setUser((prevState) => ({
                          ...prevState,
                          city: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="relative w-full">
                    <label htmlFor="country" className="leading-7 text-sm text-gray-600">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      defaultValue={user.country}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onKeyUp={(e) => {
                        setUser((prevState) => ({
                          ...prevState,
                          country: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="skill" className="leading-7 text-sm text-gray-600">
                    Skills
                  </label>
                  <div className="relative inline-block text-left w-full">
                    <input
                      type="text"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      id="skills"
                      onChange={(e) => {
                        searchSkill(e.target.value);
                      }}
                      // onBlur={(e) => {
                      //   setIsSuggestSkillOpen(false);
                      // }}
                      // onFocus={() => suggestSkill.length && setIsSuggestSkillOpen(true)}
                    />
                    {isSuggestSkillOpen && (
                      <div className="absolute left-0 z-50 mt-2 min-w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                        {suggestSkill.map((skill) => {
                          return (
                            <a
                              role="button"
                              key={skill}
                              onClick={(e) => {
                                setSelectedSkill((prevState) => [...prevState, e.target.innerHTML]);
                                setSuggestSkill([]);
                                setIsSuggestSkillOpen(false);
                                document.getElementById("skills").value = "";
                              }}
                              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                              {capitalizeFirstLetter(skill)}
                            </a>
                          );
                        })}
                        {suggestSkill.length == 0 && (
                          <a
                            role="button"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          >
                            No suggestion available
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="my-4">
                    <div className="flex flex-row gap-4">
                      {selectedSkill.map((skill) => {
                        return (
                          <button
                            type="button"
                            key={skill}
                            className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-center text-white bg-indigo-500 rounded hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 relative"
                            onClick={() => removeSelectedSkill(skill)}
                          >
                            {skill}
                            <span className="w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-white border-indigo-600 border rounded-full absolute -top-1 -right-1">
                              <i className="fa-solid fa-times"></i>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="about" className="leading-7 text-sm text-gray-600">
                    Introduction
                  </label>
                  <textarea
                    id="about"
                    defaultValue={user.introduction}
                    rows={8}
                    cols={4}
                    className="w-full border rounded-lg resize-none p-4 focus:outline-indigo-500 focus:border-indigo-500"
                    onKeyUp={(e) => {
                      setUser((prevState) => ({
                        ...prevState,
                        introduction: e.target.value,
                      }));
                    }}
                  ></textarea>
                </div>

                <div className="border p-4 mb-4 rounded">
                  <div className="border-b mb-2 pb-2 flex flex-row justify-between items-center">
                    <h1 className="text-xl">Educations</h1>
                    <button
                      className="text-white bg-indigo-500 border-0 py-0.5 px-4 focus:outline-none hover:bg-indigo-600 rounded"
                      onClick={() => (educationCount < 4 ? setEducationCount((prevState) => prevState + 1) : "")}
                    >
                      <i className="fa-solid fa-plus"></i>
                      <span className="ml-1">Add</span>
                    </button>
                  </div>
                  {Array.from({ length: educationCount }, (_, index) => (
                    <div key={index}>
                      <div className="flex flex-row gap-4 mb-2">
                        <div className="relative w-full">
                          <label htmlFor={`course-${index}`} className="leading-7 text-sm text-gray-600">
                            Course
                          </label>
                          <input
                            type="text"
                            id={`course-${index}`}
                            name="course[]"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onKeyUp={(e) => {
                              let name = document.getElementsByName(e.target.getAttribute("name"));
                              let result: string[] = [];
                              name.forEach((data) => {
                                result.push(data.value);
                              });
                              setCourses(result);
                            }}
                          />
                        </div>
                        <div className="relative w-full">
                          <label htmlFor={`graduate-${index}`} className="leading-7 text-sm text-gray-600">
                            Graduate
                          </label>
                          <select
                            id={`graduate-${index}`}
                            name="graduate[]"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={(e) => {
                              let name = document.getElementsByName(e.target.getAttribute("name"));
                              let result: string[] = [];
                              name.forEach((data) => {
                                result.push(data.value);
                              });
                              setGraduate(result);
                            }}
                          >
                            <option>Graduate</option>
                            <option value={"undergraduate"}>Undergraduate</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 mb-2">
                        <div className="relative w-full">
                          <label htmlFor={`year-${index}`} className="leading-7 text-sm text-gray-600">
                            Year Start
                          </label>
                          <input
                            type="date"
                            id={`year-${index}`}
                            name="education_year_start[]"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => {
                              let name = document.getElementsByName(e.target.getAttribute("name"));
                              let result: string[] = [];
                              name.forEach((data) => {
                                result.push(data.value);
                              });
                              setSchoolYearStart(result);
                            }}
                          />
                        </div>
                        <div className="relative w-full">
                          <label htmlFor={`finish-${index}`} className="leading-7 text-sm text-gray-600">
                            Year End
                          </label>
                          <input
                            type="date"
                            id={`finish-${index}`}
                            name="education_year_end[]"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => {
                              let name = document.getElementsByName(e.target.getAttribute("name"));
                              let result: string[] = [];
                              name.forEach((data) => {
                                result.push(data.value);
                              });
                              setSchoolYearEnd(result);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border p-4 mb-4 rounded">
                  <div className="border-b mb-2 pb-2 flex flex-row justify-between items-center">
                    <h1 className="text-xl">Experience</h1>
                    <button
                      className="text-white bg-indigo-500 border-0 py-0.5 px-4 focus:outline-none hover:bg-indigo-600 rounded"
                      onClick={() => setExperienceCount((prevState) => prevState + 1)}
                    >
                      <i className="fa-solid fa-plus"></i>
                      <span className="ml-1">Add</span>
                    </button>
                  </div>
                  {Array.from({ length: experienceCount }, (_, index) => (
                    <div key={index}>
                      <div className="flex flex-row gap-4 mb-2">
                        <div className="relative w-full">
                          <label htmlFor={`company-${index}`} className="leading-7 text-sm text-gray-600">
                            Company
                          </label>
                          <input
                            type="text"
                            id={`company-${index}`}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onKeyUp={(e) => {
                              let name = document.getElementsByName(e.target.getAttribute("name"));
                              let result: string[] = [];
                              name.forEach((data) => {
                                result.push(data.value);
                              });
                              setCompanies(result);
                            }}
                          />
                        </div>
                        <div className="relative w-full">
                          <label htmlFor={`position-${index}`} className="leading-7 text-sm text-gray-600">
                            Position
                          </label>
                          <input
                            type="text"
                            id={`position-${index}`}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onKeyUp={(e) => {
                              let name = document.getElementsByName(e.target.getAttribute("name"));
                              let result: string[] = [];
                              name.forEach((data) => {
                                result.push(data.value);
                              });
                              setPositions(result);
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 mb-2">
                        <div className="relative w-full">
                          <label htmlFor={`exp_start-${index}`} className="leading-7 text-sm text-gray-600">
                            Year Start
                          </label>
                          <input
                            type="date"
                            id={`exp_start-${index}`}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => {
                              let name = document.getElementsByName(e.target.getAttribute("name"));
                              let result: string[] = [];
                              name.forEach((data) => {
                                result.push(data.value);
                              });
                              setExpStart(result);
                            }}
                          />
                        </div>
                        <div className="relative w-full">
                          <label htmlFor={`exp_finish-${index}`} className="leading-7 text-sm text-gray-600">
                            Year End
                          </label>
                          <input
                            type="date"
                            id={`exp_finish-${index}`}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => {
                              let name = document.getElementsByName(e.target.getAttribute("name"));
                              let result: string[] = [];
                              name.forEach((data) => {
                                result.push(data.value);
                              });
                              setExpEnd(result);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={(e) => {
                    updateProfile(e);
                  }}
                >
                  Update Profile
                </button>
              </div>
            </div>

            <div className="border p-6 rounded-lg">
              <h1 className="text-xl font-medium mb-8">Delete Account</h1>
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                />
                <label htmlFor="default-checkbox" className="ms-2 text-md">
                  I confirm my account deactivation.
                </label>
              </div>
              <button className="inline-flex text-white bg-red-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Delete Account
              </button>
            </div>
          </div>

          <div className="w-96">
            <Ads />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
