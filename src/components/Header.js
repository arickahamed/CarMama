import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");

  const [toggleNavIcon, setToggleNavIcon] = useState(false);
  const handleToggleNavIcon = () => {
    setToggleNavIcon(!toggleNavIcon);
  };

  const logOutHandler = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  const getUser = localStorage?.getItem("userInfo");
  let user = JSON.parse(getUser)?.user;
  const admin = user?.role == "admin";
  console.log(user?.email);

  // console.log(admin);

  return (
    <div className="w-screen relative">
      <div className="w-auto stick top border border-orange-600">
        <div className=" flex justify-between w-[85%] mx-auto py-6">
          <div className="logo">
            <h3
              className="font-bold text-xl cursor-pointer"
              onClick={() => navigateToHome()}
            >
              Car<span className="text-orange-600">Mama</span>
            </h3>
          </div>
          {user && (
            <h6 className="font-semibold block md:hidden lg:hidden">
              {user?.email}
            </h6>
          )}
          <div
            className="nav-menu-icon md:hidden lg:hidden"
            onClick={() => handleToggleNavIcon()}
          >
            {toggleNavIcon ? (
              <span className="text-red-500">
                <RxCross2 />
              </span>
            ) : (
              <RxHamburgerMenu />
            )}
          </div>
          <div className="nav text-[20px] text-gray-600 hidden md:block lg:block">
            <NavLink
              className={`mr-4 text-md p-1 cursor-pointer font-semibold transition-all duration-500 border border-gray-200  hover:border-orange-500 hover:rounded-md hover:px-2`}
              to="/"
              style={({ isActive }) => {
                return isActive
                  ? {
                      border: "1px solid rgb(249 115 22)",
                      padding: "4px 8px",
                      borderRadius: "6px",
                    }
                  : {};
              }}
            >
              Home
            </NavLink>

            {admin && (
              <NavLink
                className={`mr-4 text-md cursor-pointer font-semibold transition-all duration-500 border p-1 border-gray-200  hover:border-orange-500  hover:rounded-md hover:px-2`}
                to="/orders"
                style={({ isActive }) => {
                  return isActive
                    ? {
                        border: "1px solid rgb(249 115 22)",
                        padding: "4px 8px",
                        borderRadius: "6px",
                      }
                    : {};
                }}
              >
                Orders
              </NavLink>
            )}

            <NavLink
              className={`mr-4 text-md cursor-pointer font-semibold transition-all duration-500 border p-1 border-gray-200  hover:border-orange-500  hover:rounded-md hover:px-2`}
              to={`${admin ? "/add-services" : "/services"}`}
              style={({ isActive }) => {
                return isActive
                  ? {
                      border: "1px solid rgb(249 115 22)",
                      padding: "4px 8px",
                      borderRadius: "6px",
                    }
                  : {};
              }}
            >
              {admin ? "Add-Services" : "Services"}
            </NavLink>
            <NavLink
              className={`mr-4 text-md cursor-pointer font-semibold transition-all duration-500 border p-1 border-gray-200  hover:border-orange-500  hover:rounded-md hover:px-2`}
              to={`${admin ? "/users" : "/cart"}`}
              style={({ isActive }) => {
                return isActive
                  ? {
                      border: "1px solid rgb(249 115 22)",
                      padding: "4px 8px",
                      borderRadius: "6px",
                    }
                  : {};
              }}
            >
              {admin ? "Users" : "Cart"}
            </NavLink>
            {admin && (
              <NavLink
                activeClassName=" text-red-200 bg-blue-gray-dark"
                className={`mr-4 text-md cursor-pointer font-semibold transition-all duration-500 border p-1 border-gray-200 hover:border-orange-500  hover:rounded-md hover:px-2`}
                to="/admins"
                style={({ isActive }) => {
                  return isActive
                    ? {
                        border: "1px solid rgb(249 115 22)",
                        padding: "4px 8px",
                        borderRadius: "6px",
                      }
                    : {};
                }}
              >
                Admins
              </NavLink>
            )}
          </div>
          <div className="login-logout-button hidden md:block lg:block">
            {user ? (
              <button
                onClick={() => logOutHandler()}
                className={`text-md font-bolder cursor-pointer border border-black rounded-[5px] shadow-lg bg-orange-600 px-3 py-2 text-white  font-semibold transition-all duration-200 hover:bg-orange-300 hover:text-gray-700`}
              >
                Logout
              </button>
            ) : (
              <NavLink
                className={`text-md font-bolder cursor-pointer border border-black rounded-[5px] shadow-lg bg-orange-600 px-3 py-2 text-white  font-semibold transition-all duration-200 hover:bg-orange-300 hover:text-gray-700`}
                to="/login"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/*---------- dropdown navbar -------------*/}
      <div
        className={`nav transition-all duration-300 ease-in ${
          toggleNavIcon
            ? " translate-y-0 flex flex-col items-center justify-center py-3 text-gray-600 text-[25px] bg-gray-200"
            : "translate-y-[-200]"
        } md:hidden lg:hidden`}
      >
        <NavLink
          className={`text-md cursor-pointer font-semibold`}
          onClick={() => setToggleNavIcon(false)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={`text-md cursor-pointer font-semibold`}
          onClick={() => setToggleNavIcon(false)}
          to={`${admin ? "/add-services" : "/services"}`}
        >
          {admin ? "Add-Services" : "Services"}
        </NavLink>
        <NavLink
          className={`text-md cursor-pointer font-semibold`}
          onClick={() => setToggleNavIcon(false)}
          to={`${admin ? "/users" : "/cart"}`}
        >
          {admin ? "Users" : "Cart"}
        </NavLink>
        {admin && (
          <NavLink
            className={`text-md cursor-pointer font-semibold`}
            onClick={() => setToggleNavIcon(false)}
            to="/admins"
          >
            Admins
          </NavLink>
        )}
        {user ? (
          <button
            onClick={() => logOutHandler()}
            className={`text-md font-bolder cursor-pointer border border-black rounded-md bg-orange-500 text-white px-5 py-2 mt-2 font-semibold`}
          >
            Logout
          </button>
        ) : (
          <NavLink
            className={`text-md font-bolder cursor-pointer border border-black rounded-md bg-orange-500 text-white px-5 py-2 mt-2 font-semibold`}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
      <div className="bg-customYellow">
        <div className="flex py-2 justify-between items-center w-[85vw] m-auto">
          <button className="bg-white shadow-sm shadow-inherit border border-black rounded-xl py-1 px-4 text-sm ">
            Select A Service
          </button>
          {user && (
            <h6 className="font-semibold hidden md:block lg:block">
              {user?.email}
            </h6>
          )}
          <div className="flex">
            <RiWhatsappFill className="mr-2 w-5" />
            <FaPhone className="w-5" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
