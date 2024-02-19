import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loginImage from '../asset/image/login-signup/login-signup_image.png';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {  FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/features/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.user?.user);
    console.log(user?.role);
    const [userInfo, setUserInfo] = useState({
        email:"",
        password: ""
    });
    const handleInputInfo = (e) =>{
        const value = e.target.value;
        setUserInfo({
            ...userInfo,
            [e.target.name]:value
        })
    };
    const clearInputInfo = () => {
        setUserInfo({
            email:"",
            password: ""
        })
    }
    // console.log(userInfo?.email, userInfo?.password);
    const [visible, setVisible] = useState(false);
    const handleVisiblity = () => {
        setVisible(!visible);
    }
  const navigate = useNavigate();
    const navigateToHome = () => navigate("/");
    const navigateToRegister = () => navigate("/register");
    const navigateToResetPass = () => navigate("/reset-password");
    const loginHandler = (e) => {
        e.preventDefault();
        // console.log(userInfo);
        axios.post("api/v1/auth/login", {
            userInfo
          })
          .then((response) => {
            if(response?.data?.success){
                toast.success(response?.data?.message);
                dispatch(setUser(response?.data));
                navigateToHome();
            }else{
                toast.error(response?.data?.message);
            }
          });
        clearInputInfo();
    }
    return (
      <div  className='w-screen'>
           <div className='lg:flex w-[90%] m-auto my-5'>
          {/* for larger device */}
          <div className='hidden lg:flex justify-evenly items-center w-[60%]'>
                <div className='flex flex-col justify-evenly'>
                <div className="">
                <h2
                            className="font-bold text-[30px] cursor-pointer"
                        >
                        Sign in to <span onClick={navigateToHome}>Car<span className="text-orange-600">Mama</span></span>
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
           <div className='lg:w-[35%] md:w-[65%] w-[85%] m-auto mt-10 border shadow-lg border-gray-300 rounded-md flex flex-col justify-center items-center'>
            <div className='py-10'>
                <h3 className='text-[23px] font-bold'>Sign In <span className='lg:hidden'>To <span className='cursor-pointer border border-b-2' onClick={navigateToHome}>Car<span className="text-orange-600">Mama</span></span> </span></h3>
                <h5 className='lg:hidden mb-4'>Cause your privacy is important to us</h5>
                <div className='lg:hidden text-sm py-2'>
                    Are you new here? Please <span className='text-blue-700 cursor-pointer' onClick={navigateToRegister}>register</span> first.
                </div>
                <div className='flex flex-col mt-2'>
                <input name='email' value={userInfo.email} onChange={handleInputInfo} type='text' className='hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none' placeholder='Your Email'/> <br />
                <div>
                <div className='flex justify-center items-center'>
                <input name='password' value={userInfo.password} onChange={handleInputInfo} type={`${visible?"text":"password"}`} className='hover:shadow-md relative border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none w-full' placeholder='Your Password'/> 
                {visible?<span className="flex justify-around items-center"><IoMdEye className="absolute mr-10" onClick={handleVisiblity}/></span> : <span className="flex justify-around items-center"><IoMdEyeOff className='text-[#A7A3FF] absolute mr-10' onClick={handleVisiblity}/></span>}
                </div>
                </div>
                </div>
                <p onClick={navigateToResetPass} className='text-sm text-[#A7A3FF] text-right pb-2 cursor-pointer'>Forgot Password?</p>
                <button onClick={loginHandler} disabled={userInfo.email == ""|| userInfo.password == ""}  className={`w-full shadow-lg border  rounded p-2 my-3 ${userInfo.email == ""|| userInfo.password == ""? "text-black bg-gray-500 border-gray-700" :"text-white border-blue-500 bg-[#4D47C3] hover:text-weight-bold hover:bg-blue-600"}`}>Login</button>
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

// 