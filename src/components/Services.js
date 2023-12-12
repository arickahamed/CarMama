import React from "react";
import { servicesInfo } from "../asset/data";

const Services = () => {
    return (
        <div className="w-screen py-10">
            <div className="w-[85%] m-auto">
                <h2 className="text-center text-[25px] font-semibold pt-5 pb-3">Our Services</h2>
                <div className=" flex justify-evenly flex-wrap pb-5">
                    {servicesInfo.map((data) => {
                        return (
                            <div className="border border-gray-300 rounded-md flex flex-col justify-between my-3 p-2 w-[45%] md:w-[24%] lg:w-[18%] m-auto">
                                <img className="w-[35%] pb-3" src={data.img} alt={data.title} />
                                <h3 className="text-lg pb-2">{data.title}</h3>
                                <button className="bg-customGray text-gray-700 shadow-sm shadow-inherit border border-orange-200 bg-gray-200 rounded-md mt-2 mb-4 py-1 px-4 text-sm cursor-pointer ">
                                    {data.button}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
