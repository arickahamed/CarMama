import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../asset/image/login-signup/login-signup_image.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";

const ResetPass = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  const navigateToSignin = () => navigate("/login");
  const navigateToRegister = () => navigate("/register");
  const [userInfo, setUserInfo] = useState({
    email: "",
    securityAnswer: "",
    password: ""
  })
  const handleInputInfo = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [e.target.name]: value
    });
  };

  const clearInputInfo = () => {
    setUserInfo({
      email: "",
      securityAnswer: "",
      password: ""
    });
  };

  console.log(userInfo?.email, userInfo?.securityAnswer, userInfo?.password);
  const [visible, setVisible] = useState(false);
  const handleVisiblity = () => {
    setVisible(!visible);
  };

  const handleResetPass = (e) => {
    e.preventDefault();
    console.log(userInfo);
    axios.post("api/v1/auth/resetPassValidation",{userInfo}).then((response) => {
      if(response?.data?.success){
        alert(response?.data?.message);
        navigateToSignin();
      }else{
        if(response?.data?.message === "Email isn't registered, Please signup"){
          alert(response?.data?.message);
          navigateToRegister();
        }else {
          alert(response?.data?.message);
        }
      }
    });
    clearInputInfo();
  }

  return (
    <div className="w-screen">
      <div className="lg:flex w-[90%] m-auto my-5">
        {/* for larger device */}
        <div className="hidden lg:flex justify-evenly items-center w-[60%]">
          <div className="flex flex-col justify-evenly">
            <div className="">
              <h2 className="font-bold text-[30px] cursor-pointer">
                Reset Password to <span onClick={navigateToHome}>Car<span className="text-orange-600">Mama</span></span>
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
          <div className="py-10 px-5">
            <h3 className="text-[23px] font-bold">
              Reset Password <span className="lg:hidden">To <span className='cursor-pointer border border-b-2' onClick={navigateToHome}>Car<span className="text-orange-600">Mama</span></span></span>
            </h3>
            <h5 className="lg:hidden mb-4">
              Cause your privacy is important to us
            </h5>
            <div className="lg:hidden text-sm py-2">
              Remember You Password? Please{" "}
              <span
                className="text-blue-700 cursor-pointer"
                onClick={navigateToSignin}
              >
                Sign in
              </span>{" "}
              .
            </div>
            <div className="flex flex-col mt-2">
              <input name="email" value={userInfo.email} onChange={handleInputInfo}
                type="text"
                className="border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none hover:shadow-md"
                placeholder="Your Email"
              />{" "}
              <br />           
              
              {/* input field for security answer */}
              <div className="inline-block relative w-full">
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
              <input name="securityAnswer" value={userInfo.securityAnswer} onChange={handleInputInfo}
                type="text"
                className="border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] hover:shadow-md focus:shadow-md focus:outline-none"
                placeholder="Your Security Answer"
              /> <br/>
              {/* security answer ends here */}
              <div>
                <div className="flex justify-center items-center">
                  <input name="password" value={userInfo.password} onChange={handleInputInfo}
                    type={`${visible ? "text" : "password"}`}
                    className="relative border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none w-full hover:shadow-md"
                    placeholder="Your New Password"
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
            </div>
            <button onClick={handleResetPass} className="w-full shadow-lg border text-white border-blue-500 bg-[#4D47C3] hover:text-weight-bold hover:bg-blue-600 rounded p-2 mt-4">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
