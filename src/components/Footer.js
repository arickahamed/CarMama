import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-auto bg-footerColor text-white flex p-5 mt-auto">
            <div className="w-[60vw]">
                <h4 className="font-bold border-b-2 pb-0 border-dotted w-fit">
                    Contact Us
                </h4>
                <h2 className="my-4 text-lg w-[90%]">
                    If It Is Something About Cars, Let's Talk
                </h2>
                <h3>CarMama - Car Service & Car Repair</h3>
                <p className="text-[12px]">
                    3rd Floor, T-Hub Building, IIT Campus, Bogura.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <p>+8801774-887213</p>
                    <p>Support@Carmama.Com</p>
                </div>
                <div className="flex mt-2">
                    <div className="border bg-white text-footerColor rounded-xl mr-1 p-1">
                        <FaFacebookF />
                    </div>
                    <div className="border bg-white text-footerColor rounded-xl mr-1 p-1">
                        <FaInstagram />
                    </div>
                    <div className="border bg-white text-footerColor rounded-xl mr-1 p-1">
                        <FaYoutube />
                    </div>
                    <div className="border bg-white text-footerColor rounded-xl mr-1 p-1">
                        <FaWhatsapp />
                    </div>
                    <div className="border bg-white text-footerColor rounded-xl p-1">
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
