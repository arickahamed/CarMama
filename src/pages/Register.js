import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../asset/image/login-signup/login-signup_image.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [phone, setPhone] = useState("");
  const [adminRole, setAdminRole] = useState(false);
  const [userRole, setUserRole] = useState(false);
  const [visible, setVisible] = useState(false);
  const role = () => {
    if(adminRole === true) {
      return "admin";
    }else if(userRole === true) {
      return "user";
    }
  }
  const clearRole = () => {
    if(adminRole === true) {
      return false;
    }else if(userRole === true) {
      return false;
    }
  }
  
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, phone, address, securityAnswer, role());
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
    setPhone("");
    setSecurityAnswer("");
    clearRole();
  }

  const handleVisiblity = () => {
    setVisible(!visible);
  };
  const handleSetAdminRole = () => {
    setAdminRole(true);
    setUserRole(false);
  };
  const handleSetUserRole = () => {
    setUserRole(true);
    setAdminRole(false);
  };
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  const navigateToSignin = () => navigate("/login");
  return (
    <div className="w-screen">
      <div className="lg:flex w-[90%] m-auto my-5">
        {/* for larger device */}
        <div className="hidden lg:flex justify-evenly items-center w-[60%]">
          <div className="flex flex-col justify-evenly">
            <div className="">
              <h2 className="font-bold text-[30px] cursor-pointer">
                Sign Up to Car<span className="text-orange-600">Mama</span>
              </h2>
              <h3>Cause your privacy is important to us</h3>
            </div>
            <div className="text-sm pt-5">
              Have an account? Please{" "}
              <span
                className="text-blue-700 cursor-pointer"
                onClick={navigateToSignin}
              >
                sign in
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img src={loginImage} className="w-[90%]" />
            </div>
          </div>
        </div>

        {/* for small device */}
        <div className="lg:w-[35%] md:w-[65%] w-[85%] max-h-[80%] shadow-lg m-auto mt-10 border border-gray-300 rounded-md flex flex-col justify-center items-center">
          <div className="py-10">
            <h3 className="text-[23px] font-bold">
              Sign Up <span className="lg:hidden">To <span className="cursor-pointer border border-b-2" onClick={navigateToHome}>Car<span className="text-orange-600">Mama</span></span> </span>
            </h3>
            <h5 className="lg:hidden mb-4">
              Cause your privacy is important to us
            </h5>
            <div className="lg:hidden text-sm py-2">
              Are you new here? Please{" "}
              <span
                className="text-blue-700 cursor-pointer"
                onClick={navigateToSignin}
              >
                Sign in
              </span>{" "}
              first.
            </div>
            <div className="flex flex-col mt-2">
              <input value={name} onChange={(e)=>setName(e.target.value)}
                type="text"
                className="hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none"
                placeholder="Your Name"
              />{" "}
              <br />
              <input
              value={email} onChange={(e)=>setEmail(e.target.value)}
                type="text"
                className="hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none"
                placeholder="Your Email"
              />{" "}
              <br />
              <div>
                <div className="flex justify-center items-center">
                  <input
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                    type={`${visible ? "text" : "password"}`}
                    className="hover:shadow-md relative border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none w-full"
                    placeholder="Your Password"
                  />
                  {visible ? (
                    <span className="flex justify-around items-center">
                      <IoMdEye
                        className="absolute mr-10"
                        onClick={handleVisiblity}
                      />
                    </span>
                  ) : (
                    <span className="flex justify-around items-center">
                      <IoMdEyeOff
                        className="text-[#A7A3FF] absolute mr-10"
                        onClick={handleVisiblity}
                      />
                    </span>
                  )}
                </div>
              </div>
              <br />
              <input
              value={phone} onChange={(e)=>setPhone(e.target.value)}
                type="text"
                className="hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none"
                placeholder="Your Phone"
              />{" "}
              <br />
              <input
              value={address} onChange={(e)=>setAddress(e.target.value)}
                type="text"
                className="hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none"
                placeholder="Your Address"
              />{" "}
              <br />
              {/* input field for security answer */}
              <div className="inline-block relative w-64">
                <select className="block appearance-none w-full text-[#A7A3FF] bg-[#F0EFFF] border border-gray-300 hover:shadow-md px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline">
                  <option>Your Security Question</option>
                  <option>Your pet's name</option>
                  <option>Your favorite place</option>
                  <option>Your mothers middle name</option>
                  <option>Your first salary</option>
                  <option>Your hobby</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <br />
              <input
              value={securityAnswer} onChange={(e)=>setSecurityAnswer(e.target.value)}
                type="text"
                className="hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none"
                placeholder="Your Security Answer"
              />
              {/* security answer ends here */}
              <div className="flex justify-between items-center my-2 text-[#7a75d8]">
              <p className="">You wanna sell ?</p>
              <form className="">
                <input onClick={handleSetAdminRole} defaultChecked={adminRole && "true"}  type="radio" id="admin" name="role" value="admin" gap="10" /> {" "}
                <label className="mr-2" htmlFor="admin">Yes</label>
                <input onClick={handleSetUserRole} defaultChecked={userRole && "true"} type="radio" id="user" name="role" value="user" /> {" "}
                <label htmlFor="user">No</label>
              </form>
              </div>
            </div>

            <button onClick={handleRegister}  className="w-full shadow-lg border text-white border-blue-500 bg-[#4D47C3] hover:text-weight-bold hover:bg-blue-600 rounded p-2 my-3">
              Signup
            </button>
            <p className="text-[#A7A3FF] mt-6 mb-3 text-center">
              or connected with
            </p>
            <div className="flex w-[50%] m-auto justify-between items-center">
              <FaFacebook className="text-blue-500" size={25} />
              <FaInstagram className="text-red-600" size={25} />
              <FcGoogle size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
