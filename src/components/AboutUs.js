import React from "react";
import wind1 from "../asset/image/aboutus/Wind (1).png";
import wind2 from "../asset/image/aboutus/Wind (2).png";

const AboutUs = () => {
    return (
        <div className="w-screen py-10">
            <div className="w-[85%] m-auto">
                <div className="m-auto flex items-center justify-between md:w-[70%] lg:w-[60%]">
                    <div className="w-[50%] md:w-[30%] lg:w-[20%]">
                        <img src={wind1} alt="" />
                    </div>
                    <div className=" w-[80%] md:w-[60%] text-center">
                        <h2 className="text-[25px] mb-2 font-semibold">About Us</h2>
                        <h4 className="text-sm font-semibold mb-1">At CarMama We Take Pride In Our Values</h4>
                        <h4 className="text-sm font-semibold">-Service, Integrity & Excellence</h4>
                    </div>
                    <div className="w-[50%] md:w-[30%] lg:w-[20%]">
                        <img src={wind2} alt="" />
                    </div>
                </div>
                <div className=" m-auto pt-5 sm:flex md:flex lg:flex lg:w-[70%]">
                <div className=" p-1 ml-1">
                        <h1 className="text-[25px] font-semibold pb-4">1.</h1>
                        <h3 className="text-sm font-semibold pb-2">Who We Are?</h3>
                        <p className="text-[13px] ">Extablished In 2023, With A Vision To Provide Customers Transparent, Convenient And Reliable Car Service And Repair Right At Customer Doorstep In Bogura</p>
                    </div>
                    <div className="p-1">
                        <h1 className="text-[25px] font-semibold pb-4">2.</h1>
                        <h3 className="text-sm font-semibold pb-2">What Is The Problem?</h3>
                        <p className="text-[13px] ">Car Owners Often Lack Visibility Regarding The Quality Of Mechanics, Usage Of Shape Parts And Transparency In Price</p>
                    </div>
                    <div className=" p-1 ml-1">
                        <h1 className="text-[25px] font-semibold pb-4">3.</h1>
                        <h3 className="text-sm font-semibold pb-2">How Do We Help?</h3>
                        <p className="text-[13px] ">Now, CarMama Is A Premier Doorstep Car Care Company Providing Car Service With Professional Technicians Right At Your Location In Bogura.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
