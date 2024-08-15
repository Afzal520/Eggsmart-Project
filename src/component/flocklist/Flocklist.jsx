import React from "react";

import { FaRegCircleCheck } from "react-icons/fa6";
const Flocklist = ({Hide}) => {
console.log(Hide)
 
 
  return (
    
    <>
      <div className="grid  md:gap-3  sm:grid-cols-1 px-2">
        <div className="rounded-lg border-2 border-black flex mb-4 shadow-[0px_8px_9px_0px_#000]">
          <div className="p-3">
            <p className="font-medium">Flock Name</p>
            <p>Breed Name</p>
            <p className="flex">
              {" "}
              <FaRegCircleCheck className="mt-2 w-6 pr-2" />
              age
            </p>
          </div>
          <div className=" flex">
            {/* <p className=" flex items-center ">circle </p> */}

            <div class={`${Hide?"":"hidden"} absolute right-4 size-16 mt-5`}>
              <svg
                class="-rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  class="stroke-current text-gray-200"
                  stroke-width="4"
                ></circle>

                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  class="stroke-current text-blue-600"
                  stroke-width="4"
                  stroke-dasharray="100"
                  stroke-dashoffset="50"
                  stroke-linecap="round"
                ></circle>
              </svg>

              <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span class="text-center text-[15px] font-bold text-blue-600">
                  50%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border-2 border-black flex mb-4 shadow-[0px_8px_9px_0px_#000]">
          <div className="p-3">
            <p className="font-medium">Flock Name</p>
            <p>Breed Name</p>
            <p className="flex">
              {" "}
              <FaRegCircleCheck className="mt-2 w-6 pr-2" />
              age
            </p>
          </div>
          <div className=" flex">
            {/* <p className=" flex items-center ">circle </p> */}

            <div class={` ${Hide?"":"hidden"} absolute right-4 size-16 mt-5`}>
              <svg
                class="-rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  class="stroke-current text-gray-200"
                  stroke-width="4"
                ></circle>

                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  class="stroke-current text-blue-600"
                  stroke-width="4"
                  stroke-dasharray="100"
                  stroke-dashoffset="65"
                  stroke-linecap="round"
                ></circle>
              </svg>

              <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span class="text-center text-[15px] font-bold text-blue-600">
                  35%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flocklist;
