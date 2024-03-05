import React, { useState } from 'react'
import loginImage from "../../asset/image/login-signup/login-signup_image.png";
import axios from 'axios';

const AddServices = () => {
  const [image, setImage] = useState("");
  console.log(image);
  const [service, setService] = useState({
    title: "",
    description: "",
    price: "",
  });

  console.log(service);

  const handleInputInfo = (e) =>{
    const value = e.target.value;
    setService({
        ...service,
        [e.target.name]:value
    })
};

// const takeImage = (e) => {
//   e.preventDefault();
//   setService({
//     ...service,
//     image: e.target.files[0],
//   });
// }

const clearInputInfo = () => {
  setService({
    title: "",
    description: "",
    price: "",
  });
  setImage("");
}

const addServiceHandler = async(e) => {
  e.preventDefault();
  setService({
    ...service,
    image : image,
  })

  console.log("service will be going to backend", service);
  await axios.post('/api/v1/services/add-service',{
    service
  }).then((response) => {
    console.log(response);
  }).catch((err) => {
    console.log(err);
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
                        Add Service to <span>Car<span className="text-orange-600">Mama</span></span>
                        </h2>
                        <h3>Your satisfaction is our first priority</h3>
                </div>
                </div>
                <div className='flex justify-between items-center'>
                <div>
                <img src={loginImage} className='w-[90%]'/>
                </div>
                </div>
            </div>

           {/* for small device */}
            <div className='lg:w-[35%] md:w-[65%] w-[85%] mx-auto mt-10 border shadow-lg border-gray-300 rounded-md flex flex-col justify-center items-center'>
            <div className='py-10'>
                <h3 className='text-[23px] font-bold'>Add Service <span className='lg:hidden'>To <span className='cursor-pointer border border-b-2'>Car<span className="text-orange-600">Mama</span></span> </span></h3>
                <h5 className='lg:hidden mb-4'>Your satisfaction is our first priority</h5>
                <div className='flex flex-col mt-2'>
                <input name='title' value={service.title}  type='text' onChange={handleInputInfo} className='hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none' placeholder='Service Title'/> <br />
                <input name='description' value={service.description}  type='text' onChange={handleInputInfo} className='hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none' placeholder='Service Description'/> <br />
                <input name='price' value={service.price}  type='text' onChange={handleInputInfo}  className='hover:shadow-md border border-gray-300 p-2 rounded-md text-[#A7A3FF] bg-[#F0EFFF] focus:text-[#2c286d] focus:shadow-md focus:outline-none' placeholder='Service Price'/> <br/>
                <input name="image" onChange={(e)=>setImage(e.target.files[0])}   type="file"/>
                
                </div>
                <button onClick={addServiceHandler} className={`w-full shadow-lg border  rounded p-2 mt-6 ${service.title == ""|| service.description == "" || service.price == "" || image == ""? "text-black bg-gray-500 border-gray-700" :"text-white border-blue-500 bg-[#4D47C3] hover:text-weight-bold hover:bg-blue-600"}`}>Add to services</button>
            </div>
            </div>
          </div>
        </div>
  )
}

export default AddServices;

// after 18 minutes the video will be resumed in shaa allah 