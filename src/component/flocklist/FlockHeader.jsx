import React from 'react'
import { FaList } from "react-icons/fa";
const FlockHeader = () => {
  return (
    <div className="mt-3">
    <p className="flex font-bold text-[22px] ">
      <FaList className="w-[50px] text-[22px] mt-1 px-2" /> Flock List
    </p>
    <p className="text-[20px] font-medium px-2">
      Total Birds in farm : 12345
    </p>
    <h1 className="text-[18px] px-2">Recent Task</h1>
  </div>
  )
}

export default FlockHeader