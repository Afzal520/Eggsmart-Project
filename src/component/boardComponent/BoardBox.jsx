import React from "react";
import { Link } from "react-router-dom";


const BoardBox = () => {
  return (
    <div className="grid  grid-cols-2 gap-2 ">
  
      <div className="bg-white p-3 shadow-[-2px_0px_6px_2px_#2a4365] border-2 h-16 justify-center items-center flex rounded-xl">
        <p className="text-[17px] justify-center  font-bold">Production- </p>

        <h1 className=" text-[15px] font-medium">85.2%</h1>
      </div>

      <div className=" bg-white shadow-[2px_0px_6px_3px_#2a4365] border-2  h-16 justify-center items-center flex rounded-xl">
        <p className="pl-1 text-[17px] justify-center  font-bold">Age-</p>

        <h1 className=" text-[15px] font-medium">{" 170Days"}</h1>
      </div>
    </div>
  );
};

export default BoardBox;
