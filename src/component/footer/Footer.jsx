import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  let Important_Link = [
    {
      id: 1,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 2,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 3,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 4,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 5,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 6,
      Name: "Add Flock",
      Link: "/",
    },
  ];
  let Report_Link = [
    {
      id: 1,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 2,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 3,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 4,
      Name: "Add Flock",
      Link: "/",
    },
    {
      id: 5,
      Name: "Add Flock",
      Link: "/",
    },
  ];
  let Social_Link = [
    {
      id: 1,
      Name: "Privacy Policy",
    },

    {
      id: 2,
      Name: "Term & Condition",
    },
    {
      id: 3,
      Name: "Disclaimer",
    },
    {
      id: 4,
      Name: "Download Android App",
    },
    {
      id: 5,
      Name: "Add Flock",
    },
  ];

  return (
    <section className="">
      <div className="grid lg:grid-cols-3">
        <div className="grid bg-slate-700 border-2 border-slate-400 p-7 rounded text-white">
          <p className="text-center font-semibold mb-3 text-[22px]">
            Important Link
          </p>
          <div className="grid grid-cols-2 text-white">
            <div className="">
              <ul>
                {Important_Link.map((item) => (
                  <li key={item.id}>
                    <Link to={item.Link}>{item.Name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="font-">Reports</p>
              <ul>
                {Report_Link.map((item) => (
                  <li key={item.id}>
                    <Link to={item.Link}>{item.Name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className= "bg-slate-700 border-2 border-slate-400 p-4 md:p-7 rounded text-white">
          <p className="text-center font-semibold mb-3 text-[22px]">
            Contact Us
          </p>
          <h1 className="flex mb-1">
            <FaHome className=" text-[25px]" />{" "}
            <span className="font-semibold mx-2">Office:</span>
            Poultry Farm, Dhuri, Distt. Sangrur,
          </h1>
          <h1 className="flex mb-1">
            <FaPhoneAlt />
            <span className="font-semibold mx-2">contact:</span>
            +911234567890
          </h1>
          <h1 className="flex mb-1">
            <MdEmail className=" text-[22px]" />{" "}
            <span className="font-semibold mx-2"> Email : </span>
            example@gmail.com
          </h1>
          <h1 className="flex mb-1">
            <FaRegCopyright className="text-[22px]" />
            <span className="font-semibold mx-2">Right: </span>
            Eggsmart. All rights reserved
          </h1>
        </div>
        <div className=" bg-slate-700 border-2 border-slate-400 grid justify-center p-7 rounded text-white">
          <div className="">
            <ul className="flex mb-2">
              <li>
                <FaFacebookSquare className="text-[40px]" />
              </li>
              <li>
                <FaYoutube className="text-[40px] mx-5" />
              </li>
              <li>
                <FaGooglePlay className="text-[40px] " />
              </li>
            </ul>
            <ul>
              {Social_Link.map((item) => (
                <li key={item.id}>{item.Name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
