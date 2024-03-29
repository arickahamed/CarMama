import { useEffect } from "react";
import allianz from "./image/partners/allianz.png";
import bro4u from "./image/partners/bro4u.png";
import ola from "./image/partners/ola.png";
import pitstop from "./image/partners/pitstop.png";
import uber from "./image/partners/uber.png";
import urban from "./image/partners/urban.png";
import ac from "./image/services/ac.png";
import battery from "./image/services/battery.png";
import reapirB from "./image/services/brake.png";
import inspection from "./image/services/car-inspection.png";
import carService from "./image/services/car-service.png";
import clutch from "./image/services/clutch.png";
import denting from "./image/services/denting.png";
import detailing from "./image/services/detailing.png";
import fitments from "./image/services/fitments.png";
import generalService from "./image/services/general-service.png";
import insurance from "./image/services/insurence.png";
import major from "./image/services/major.png";
import membership from "./image/services/membership.png";
import suspeension from "./image/services/suspeension.png";
import tires from "./image/services/tires.png";
import windsheld from "./image/services/windsheld.png";
import trademarkImg1 from "./image/trademark/Group 48.png";
import trademarkImg2 from "./image/trademark/Group 49.png";
import trademarkImg3 from "./image/trademark/Group 50.png";

    const getUser = localStorage?.getItem('userInfo');
    const user = JSON.parse(getUser);
    console.log(user?.user?.role);

export const navData = [
    {
        name: "Home",
        link: "/"   
    },
    {
        name: "Services",
        link: "/services"   
    },
    {
        name: "Cart",
        link: "/cart"   
    },
    {
        name: "Login",
        link: "/login"   
    }
];

export const adminNavData = [
    {
        name: "Home",
        link: "/"   
    },
    {
        name: "Services",
        link: "/add-services"   
    },
    {
        name: "Admins",
        link: "/admins"   
    },
    {
        name: "Users",
        link: "/users"   
    },
    {
        name: "Logout",
        link: ""   
    }
];

export const partnersImage = [
    {image: allianz},
    {image: bro4u},
    {image: ola},
    {image: pitstop},
    {image: uber},
    {image: urban},
];

export const overviewData = [
    {info: "CAR REPAIRS"},
    {info: "CAR INSPECTION"},
    {info: "CAR DENTING & PAINTING"},
    {info: "CAR MAJOR REPAIRS"},
    {info: "CAR CUSTOM REPAIRS"},
    {info: "CAR AC REPAIRS"}
];

export const trademarkInfo = [
    {img:trademarkImg1,
    title: "90 Min Car Service",
    info: "Experience Quick Service Which Completes In Just 90 Minutes, Which Will Help You Save Your Precious Time And Efforts Of Visiting Workshop To Get Your Car Serviced."
    },
    {img:trademarkImg2,
    title: "In House Technicians",
    info: "CarMama Recruits Best In Class German Car Technicians With A Minimum Of 8+ Years Of Experience And Train Them, After Enabling Them With Garage Nation's Standards They Are Assigned For Services/Repairs."
    },
    {img:trademarkImg3,
    title: "Savings Up To 40%",
    info: "CarMama Provides 100% Transparent Service Which Means All Parts Are Opened Right In Front Of Your While Performing Service And No More Surprised Or Extra Spares Or Costs."
    }
];

export const servicesInfo = [
    {img: generalService,
     title: "General Service",
     button: "Enquire Us"
    },
    {img: denting,
     title: "Denting and Painting",
     button: "Enquire Us"
    },
    {img: inspection,
     title: "Car Inspection",
     button: "Enquire Us"
    },
    {img: battery,
     title: "Battery replacement",
     button: "Enquire Us"
    },
    {img: ac,
     title: "AC Service & repair",
     button: "Enquire Us"
    },
    {img: fitments,
     title: "Car fitments",
     button: "Enquire Us"
    },
    {img: detailing,
     title: "Car Detailing Services",
     button: "Enquire Us"
    },
    {img: major,
     title: "Car major repairs",
     button: "Enquire Us"
    },
    {img: windsheld,
     title: "Windshield & Repairs",
     button: "Enquire Us"
    },
    {img: suspeension,
     title: "Suspeension Repairs",
     button: "Enquire Us"
    },
    {img: clutch,
     title: "Cluth Repairs",
     button: "Enquire Us"
    },
    {img: tires,
     title: "Tires & Wheels",
     button: "Enquire Us"
    },
    {img: reapirB,
     title: "Break Repairs",
     button: "Enquire Us"
    },
    {img: carService,
     title: "Car Service",
     button: "Enquire Us"
    },
    {img: membership,
     title: "Membership",
     button: "Enquire Us"
    },
    {img: insurance,
     title: "Insurance Claims",
     button: "Enquire Us"
    },
];