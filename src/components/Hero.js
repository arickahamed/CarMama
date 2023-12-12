import React from "react";
import heroImg from "../asset/image/heroImage.png";

const Hero = () => {
    return (
        <div className="w-screen  pt-9 pb-5 ">
            <div className="w-[85%]  flex flex-col justify-center items-center m-auto text-center">
                <div>
                    <h2 className="text-[25px] font-semibold mb-3">
                        Car Repair At Your Door Step
                    </h2>
                    <button className="bg-customGray text-gray-700 shadow-sm shadow-inherit border border-orange-200 bg-gray-200 rounded-xl mt-2 mb-4 py-1 px-4 text-sm cursor-pointer ">
                        Select A Car
                    </button>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img className="w-full" src={heroImg} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
