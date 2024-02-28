import React, { useEffect, useState } from "react";
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
    }

    let user;
    const admin = user?.role == "admin";
    console.log(user);

    useEffect(() => {
        const getUser = localStorage?.getItem('userInfo');
        user = JSON.parse(getUser)?.user;
    }, ["userInfo"])
    
    
    // console.log(admin);

    return (
        <div className="w-screen relative">
            <div className="w-auto sticky top border border-orange-600">
                <div className=" flex justify-between w-[85%] mx-auto py-6">
                    <div className="logo">
                        <h3
                            className="font-bold text-xl cursor-pointer"
                            onClick={() => navigateToHome()}
                        >
                            Car<span className="text-orange-600">Mama</span>
                        </h3>
                        
                    </div>
                    <div className="nav-menu-icon md:hidden lg:hidden" onClick={()=>handleToggleNavIcon()}>
                            {toggleNavIcon ? <span className="text-red-500"><RxCross2 /></span> : <RxHamburgerMenu /> }
                        </div>
                    <div className="nav hidden md:block lg:block">
                        <NavLink className={`mr-2 text-md cursor-pointer font-semibold`} to="/">Home</NavLink>
                        <NavLink className={`mr-2 text-md cursor-pointer font-semibold`} to={`${admin?"/add-services": "/services"}`}>{admin? "Add-Services" : "Services" }</NavLink>
                        <NavLink className={`mr-2 text-md cursor-pointer font-semibold`} to={`${admin?"/users": "/cart"}`}>{admin? "Users" : "Cart" }</NavLink>
                        {admin && <NavLink className={`mr-2 text-md cursor-pointer font-semibold`} to="/admins">Admins</NavLink>}
                        {user ? (<button onClick={()=>logOutHandler()} className={`mr-3 text-md font-bolder cursor-pointer border border-black rounded-md bg-orange-500 text-white px-2 py-1 font-semibold`}>Logout</button>) : (<NavLink className={`mr-3 text-md font-bolder cursor-pointer border border-black rounded-md bg-orange-500 text-white px-2 py-1 font-semibold`} to="/login">Login</NavLink>) }
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
