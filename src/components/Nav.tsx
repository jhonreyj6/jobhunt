import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "../stores/store";
import { resetState } from "../stores/userSlice";
import { useEffect } from "react";

// Headless
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Nav = () => {
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(resetState());
  };
  return (
    <>
      <nav className="bg-indigo-500 border-gray-200 fixed w-full z-50">
        <div className="max-w-8xl flex flex-row items-center justify-between mx-auto p-4">
          <div className="flex flex-row gap-2 items-center w-auto">
            <div className="h-8 w-8">
              <NavLink to="/">
                <img
                  src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg"
                  className="w-8 h-8 rounded-full"
                  alt="Flowbite Logo"
                />
              </NavLink>
            </div>

            {!user.isLoggedIn && (
              <>
                <div className="text-white text-lg">
                  <NavLink to="/about" className="py-4 px-2 hover:text-indigo-700">
                    About
                  </NavLink>
                </div>
              </>
            )}

            {user.isLoggedIn && (
              <>
                <Menu>
                  <MenuButton className="outline-none px-2 text-lg text-white hover:text-indigo-700">Jobs</MenuButton>

                  <MenuItems
                    anchor={{
                      to: "bottom",
                      offset: "48px",
                      gap: "22px",
                    }}
                    className="flex flex-col z-50 bg-white divide-y divide-gray-100 shadow w-44 [--anchor-gap:18px]"
                  >
                    <MenuItem>
                      <NavLink to="/jobs/contracts" className="block px-4 py-2 hover:bg-gray-100">
                        Contracts
                      </NavLink>
                    </MenuItem>

                    <MenuItem>
                      <NavLink to="/jobs/invitations" className="flex px-4 py-2 items-center hover:bg-gray-100">
                        <span>Invitations</span>
                        <span className="ml-auto rounded-full px-2 py-0.5 text-white text-xs bg-red-500">2</span>
                      </NavLink>
                    </MenuItem>

                    <MenuItem>
                      <NavLink to="/jobs/bookmarks" className="block px-4 py-2 hover:bg-gray-100">
                        Bookmarks
                      </NavLink>
                    </MenuItem>
                  </MenuItems>
                </Menu>

                <NavLink to="/jobs/proposals" className="outline-none px-2 text-lg text-white hover:text-indigo-700">
                  Proposals
                </NavLink>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="lg:hidden text-gray-500 hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {!user.isLoggedIn && (
              <>
                <div className="text-white text-lg lg:block hidden">
                  <NavLink to="/login" className="py-4 px-2 hover:text-indigo-700">
                    Login
                  </NavLink>
                </div>

                <div className="text-white text-lg lg:block hidden">
                  <NavLink to="/register" className="py-4 px-2 hover:text-indigo-700">
                    Register
                  </NavLink>
                </div>
              </>
            )}

            {user.isLoggedIn && (
              <>
                <div className="text-white lg:block hidden">
                  <Menu>
                    <MenuButton className="outline-none relative inline-flex items-center text-sm text-center text-white rounded-lg">
                      <i className="fa-regular fa-bell text-xl hover:text-indigo-700 px-4"></i>
                      <span className="sr-only">Notifications</span>
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-white rounded-full -top-2 end-0 dark:border-gray-900">
                        2
                      </div>
                    </MenuButton>

                    <MenuItems
                      anchor="bottom"
                      className="z-20 bg-white divide-y divide-gray-100 rounded-lg [--anchor-gap:16px] [--anchor-offset:-66px] w-96"
                    >
                      <MenuItem>
                        <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50">
                          Notifications
                        </div>
                      </MenuItem>

                      <MenuItem>
                        <div className="divide-y divide-gray-100">
                          <a href="#" className="flex px-4 py-3 hover:bg-gray-100">
                            <div className="flex-shrink-0">
                              <img
                                className="rounded-full w-11 h-11"
                                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                                alt="Jese image"
                              />
                              <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-ful">
                                <svg
                                  className="w-2 h-2 text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 18 18"
                                >
                                  <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                  <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                </svg>
                              </div>
                            </div>
                            <div className="w-full ps-3">
                              <div className="text-gray-500 text-sm mb-1.5">
                                New message from <span className="font-semibold text-gray-900">Jese Leos</span>: "Hey,
                                what's up? All set for the presentation?"
                              </div>
                              <div className="text-xs text-blue-600">a few moments ago</div>
                            </div>
                          </a>
                        </div>
                      </MenuItem>

                      <MenuItem>
                        <a
                          href="#"
                          className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="inline-flex items-center ">
                            <svg
                              className="w-4 h-4 me-2 text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 14"
                            >
                              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                            </svg>
                            View all
                          </div>
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>

                <div className="text-white lg:block hidden">
                  <NavLink
                    to="/messages"
                    className="px-2 relative inline-flex items-center text-sm text-center text-white rounded-lg"
                  >
                    <i className="fa-regular fa-message text-xl hover:text-indigo-700"></i>

                    <span className="sr-only">Messages</span>
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                      2
                    </div>
                  </NavLink>
                </div>

                <div className="text-white lg:block hidden">
                  <Menu>
                    <MenuButton className="outline-none px-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="rounded-full w-8 h-auto"
                        src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                        alt="user photo"
                      />
                    </MenuButton>
                    <MenuItems
                      anchor={{
                        to: "bottom",
                        offset: "-70px",
                        gap: "22px",
                      }}
                      className="z-50 bg-white divide-y divide-gray-100 shadow w-44"
                    >
                      <MenuItem>
                        <NavLink to={"/user/profile/" + user.user.slug} className="block px-4 py-2 hover:bg-gray-100">
                          Profile
                        </NavLink>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          Settings
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="flex flex-row px-4 py-2 hover:bg-gray-100">
                          <span>Balance:</span>
                          <span className="ml-auto text-indigo-700">$43</span>
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" onClick={logout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Logout
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
