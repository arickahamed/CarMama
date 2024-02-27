import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { navData } from "../asset/data";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/features/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const navigateToHome = () => navigate("/");
    
    const getUser = localStorage?.getItem('userInfo');
    const user = JSON.parse(getUser);
    console.log(user?.user);

    return (
        <div className="w-screen relative">
            <div className="w-auto sticky top border border-orange-600">
                <div className=" flex justify-between w-[85%] mx-auto py-6">
                    <div className="logo ">
                        <h3
                            className="font-bold text-xl cursor-pointer"
                            onClick={() => navigateToHome()}
                        >
                            Car<span className="text-orange-600">Mama</span>
                        </h3>
                    </div>
                    <div className="nav">
                        {navData?.map((data) => {
                            return (
                                <NavLink
                                    className={`mr-2 text-sm md:text-lg cursor-pointer  ${
                                        data.name == "Login"
                                            ? "border border-orange-500 rounded-lg bg-orange-500 text-white px-2 py-1"
                                            : ""
                                    }`}
                                    to={data.link}
                                >
                                    {data.name}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="bg-customYellow">
                <div className="flex py-2 justify-between items-center w-[85vw] m-auto">
                    <button className="bg-white shadow-sm shadow-inherit border border-black rounded-xl py-1 px-4 text-sm ">
                        Select A Car
                    </button>
                    <div className="flex">
                        <RiWhatsappFill className="mr-2 w-5" />
                        <FaPhone className="w-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
