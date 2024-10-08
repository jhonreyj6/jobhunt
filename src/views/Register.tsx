import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const register = (e) => {
    e.target[5].disabled = true;
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.confirmPassword,
      },
      url: `/api/auth/register`,
    })
      .then((res) => {
        alert("Account created. Please check your email for confirmation");
      })
      .catch((err) => {
        e.target[5].disabled = false;
      });
  };

  return (
    <>
      <div className="pt-20">
        <div className="text-gray-800 bg-white max-w-4xl flex items-center mx-auto p-24">
          <div className="w-full items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
            <form
              className="md:col-span-2 w-full py-6 px-6 sm:px-16"
              onSubmit={(e) => {
                register(e);
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Create an account</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="text-sm mb-2 block">Name</label>
                  <div className="relative flex items-center">
                    <input
                      onKeyUp={(e) => {
                        setForm((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                        }));
                      }}
                      type="text"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter name"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Email</label>
                  <div className="relative flex items-center">
                    <input
                      onKeyUp={(e) => {
                        setForm((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }));
                      }}
                      type="email"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter email"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      onKeyUp={(e) => {
                        setForm((prevState) => ({
                          ...prevState,
                          password: e.target.value,
                        }));
                      }}
                      type="password"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Confirm Password</label>
                  <div className="relative flex items-center">
                    <input
                      onKeyUp={(e) => {
                        setForm((prevState) => ({
                          ...prevState,
                          confirmPassword: e.target.value,
                        }));
                      }}
                      type="password"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter confirm password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <a href="#!" className="text-blue-600 font-semibold hover:underline ml-1">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="!mt-10">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                >
                  Create an account
                </button>
              </div>
              <p className="text-sm mt-6 text-center">
                Already have an account?{" "}
                <a href="#!" className="text-blue-600 font-semibold hover:underline ml-1">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
