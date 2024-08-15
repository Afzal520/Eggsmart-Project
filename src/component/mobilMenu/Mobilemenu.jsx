import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoMdDocument } from "react-icons/io";

import { FaCirclePlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Mobilemenu = () => {

  
  return (
    <section className="fixed w-full bottom-0">
      <div className="grid grid-cols-3 bg-slate-700 p-3 gap-2">
        <div className="grid items-center justify-center">
          <Link to="">
          <IoHomeOutline className="size-8"  />
          </Link>
        </div>
        {/* <div className="grid items-center justify-center">
          <Link to="">
            <CiCalendar  className="size-8" />
          </Link>
        </div> */}
        <div className="grid items-center justify-center ">
          <Link to="">
            <FaCirclePlus  className="size-12" />
          </Link>
        </div>
        {/* <div className="grid items-center justify-center">
          <Link to="">
            <IoMdDocument  className="size-8" />
          </Link>
        </div> */}
        <div className="grid items-center justify-center">
          <Link to="">
            <CgProfile  className="size-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mobilemenu;
