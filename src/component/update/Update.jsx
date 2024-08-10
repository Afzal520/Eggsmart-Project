import React from "react";

import { IoSaveSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";


const Update = () => {
  return (
    <section className="flock-container ">
      <div className="px-5 py-4 grid lg:grid-cols-2 lg:justify-end back-img">
        <div className="hidden lg:block mt-12">
          <img src="/img/basket.jpg" alt="" />
        </div>
      
        <div className="">
        <div className="flex mb-6">
          <GrUpdate className="text-[30px] mt-1" />{" "}
          <p className="px-4 font-bold text-[22px]"> UPDATE PROFILE : </p>
        </div>
          <form action="">
            <label className="block mb-2  font-medium">Password*</label>
            <input
              className="border border-black w-full  rounded h-10 px-2 mb-2"
              type="password"
              name=""
              id=""
              placeholder="password"
            />

            <label className="block mb-2  font-medium">New Password* </label>
            <input
              className="border border-black  w-full rounded h-10 px-2 mb-2"
              type="Password"
              name=""
              id=""
              placeholder="New Password"
            />
            <label className="block mb-2  font-medium">Confirm Password</label>
            <input
              className="border border-black w-full rounded h-10 px-2 mb-2"
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
            />
            <label className="block mb-2  font-medium">Email* </label>
            <input
              className="border border-black w-full rounded h-10 px-2 mb-2"
              type="email"
              name=""
              id=""
              placeholder="abc@gmail.com"
            />
            <label className="block mb-2  font-medium">Farm Name* </label>
            <input
              className="border border-black w-full rounded h-10 px-2 mb-2"
              type="text"
              name=""
              id=""
              placeholder="Farm Name"
            />
            
            <div className="flex justify-end mt-3 mb-4 text-white">
              <button className="bg-blue-950 rounded p-2 w-28 flex">
                Update <IoSaveSharp className="mt-1 mx-3" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Update;
