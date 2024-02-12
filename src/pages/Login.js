import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loginImage from '../asset/image/login-signup/login-signup_image.png';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {  FcGoogle } from "react-icons/fc";

const Login = () => {
    const [visible, setVisible] = useState(false);
    const handleVisiblity = () => {
        setVisible(!visible);
    }
  const navigate = useNavigate();
    const navigateToHome = () => navigate("/");
    const navigateToRegister = () => navigate("/register");
  return (
      <div  className='w-screen'>
        <div className="logo pt-3 pl-3">
                        <h5
                            className="font-bold text-md cursor-pointer"
                            onClick={() => navigateToHome()}
                        >
                            Car<span className="text-orange-600">Mama</span>
                        </h5>
        </div>

           <div className='lg:flex w-[90%] m-auto my-5'>
          {/* for larger device */}
          <div className='hidden lg:flex justify-evenly items-center w-[60%]'>
                <div className='flex flex-col justify-evenly'>
                <div className="">
                <h2
                            className="font-bold text-[30px] cursor-pointer"
                        >
                        Sign in to Car<span className="text-orange-600">Mama</span>
                        </h2>
                        <h3>Cause your privacy is important to us</h3>
                </div>
                <div className='text-sm pt-5'>
                    Are you new here? Please <span className='text-blue-700 cursor-pointer' onClick={navigateToRegister}>register</span> first.
                </div>
                </div>
                <div className='flex justify-between items-center'>
                <div>
                <img src={loginImage} className='w-[90%]'/>
                </div>
                </div>
           </div>

           {/* for small device */}
           <div className='lg:w-[35%] w-[75%] m-auto mt-10 border border-gray-400 rounded-md flex flex-col justify-center items-center'>
            <div className='py-10'>
                <h3 className='text-[23px] font-bold'>Sign In <span className='lg:hidden'>To CarMama</span></h3>
                <h5 className='lg:hidden mb-4'>Cause your privacy is important to us</h5>
                <div className='lg:hidden text-sm py-2'>
                    Are you new here? Please <span className='text-blue-700 cursor-pointer' onClick={navigateToRegister}>register</span> first.
                </div>
                <div className='flex flex-col mt-2'>
                <input type='text' className='border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none' placeholder='Your Email'/> <br />
                <div>
                <div className='flex justify-center items-center'>
                <input type={`${visible?"text":"password"}`} className='relative border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none w-full' placeholder='Your Password'/> 
                {visible?<span className="flex justify-around items-center"><IoMdEye className="absolute mr-10" onClick={handleVisiblity}/></span> : <span className="flex justify-around items-center"><IoMdEyeOff className='text-[#A7A3FF] absolute mr-10' onClick={handleVisiblity}/></span>}
                </div>
                </div>
                </div>
                <p className='text-sm text-[#A7A3FF] text-right pb-2 cursor-pointer'>Forgot Password?</p>
                <button className='w-full shadow-lg border text-white border-blue-500 bg-[#4D47C3] hover:text-weight-bold hover:bg-blue-600 rounded p-2 my-3'>Login</button>
                <p className='text-[#A7A3FF] mt-6 mb-3 text-center'>or connected with</p>
                <div className='flex w-[50%] m-auto justify-between items-center'>
                <FaFacebook className='text-blue-500' size={25}/>
                <FaInstagram className='text-red-600' size={25} />
                <FcGoogle size={25} />
                </div>
            </div>

           </div>
           </div>
        </div>
  )
}

export default Login;