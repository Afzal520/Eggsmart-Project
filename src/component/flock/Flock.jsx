import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoSaveSharp } from "react-icons/io5";

const Flock = () => {
  return (
    <section className="flock-container ">
      <div className="px-5 py-4 grid lg:grid-cols-2 lg:justify-end back-img">
        <div className="hidden lg:block mt-12">
          <img src="/img/basket.jpg" alt="" />
        </div>
      
        <div className="">
        <div className="flex mb-6">
          <FaPlus className="text-[30px] mt-1" />{" "}
          <p className="px-4 font-bold text-[25px]"> New Flock</p>
        </div>
          <form action="">
            <label className="block mb-2  font-medium">FLOCK NAME*</label>
            <input
              className="border border-black w-full  rounded h-10 px-2 mb-2"
              type="text"
              name=""
              id=""
              placeholder="Flock name"
            />

            <label className="block mb-2  font-medium">BREED NAME* </label>
            <input
              className="border border-black w-full rounded h-10 px-2 mb-2"
              type="text"
              name=""
              id=""
              placeholder="Breed name"
            />
            <label className="block mb-2  font-medium">Date* </label>
            <input
              className="border border-black w-full rounded h-10 px-2 mb-2"
              type="date"
              name=""
              id=""
              placeholder=""
            />
            <label className="block mb-2  font-medium">FlOCK START AGE* </label>
            <input
              className="border border-black w-full rounded h-10 px-2 mb-2"
              type="number"
              name=""
              id=""
              placeholder="Age"
            />
            <label className="block mb-2  font-medium">OPNEING BIRDS* </label>
            <input
              className="border border-black w-full rounded h-10 px-2 mb-2"
              type="number"
              name=""
              id=""
              placeholder="Opening birds"
            />
            <label className="block mb-2  font-medium">SHED NUMBER* </label>
            {/* <IoSaveSharp className="absolute mt-3" /> */}
            <input
            
           
              className="border border-black  w-full rounded h-10 px-2"
              type="number"
              name=""
              id=""
              placeholder="Shed number"
              
            />
            <div className="flex justify-end mt-3 mb-4 text-white">
              <button className="bg-blue-950 rounded p-2 w-24 flex">
                Save <IoSaveSharp className="mt-1 mx-3" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Flock;
